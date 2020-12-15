import React, { Children, FC, Fragment, ReactElement, useCallback, useState } from 'react';
import { isFragment } from 'react-is';
import { CollapseDispatchProvider, CollapseStateProvider } from './context/CollapseContext';
import { useCollapseDispatch } from './hook/useCollapseDispatch';
import Panel, { PanelProps } from './Panel';
import { parseValueToArray } from './util/parseValueToArray';

type KeyStateType = string | string[];

export interface CollapseProps {
  /** Active key của panel */
  activeKey?: KeyStateType;
  /** Default Active key của panel có thể điền 1 hoặc nhiều key. VD: defaultActiveKey="1" | defaultActiveKey={['0','1']}  */
  defaultActiveKey?: KeyStateType;
  /** disabled panel */
  disabled?: boolean;
  /** Sự kiện onChange */
  onChange?: (panelKey: KeyStateType) => void;
}

interface CollapseStatic {
  Panel: typeof Panel;
}

const Collapse: FC<CollapseProps> & CollapseStatic = ({ activeKey, defaultActiveKey, disabled, onChange, children }) => {
  const dispatchContext = useCollapseDispatch();
  const currentActiveKey = activeKey ? activeKey : defaultActiveKey;
  const [activeStateKey, setActiveStateKey] = useState(parseValueToArray(currentActiveKey as KeyStateType));

  const _handleOnChange = (key: KeyStateType) => {
    if (!activeKey) {
      setActiveStateKey(key as string[]);
    }
    onChange?.(key);
    dispatchContext?.onChange?.(key);
  };

  const _onClick = useCallback(
    (key: string) => {
      const _activeKey = [...activeStateKey];
      const idx = _activeKey.indexOf(key);
      const isActive = idx > -1;

      if (isActive) {
        _activeKey.splice(idx, 1); // remove key when panel is not active
      } else {
        _activeKey.push(key); // add key to array when click
      }

      _handleOnChange(_activeKey);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeStateKey],
  );

  const _renderNewChild = (child: ReactElement, index: string | number) => {
    if (!child) return null;
    const activeKey = activeStateKey;
    const key = String(index);
    let isActive = false;
    isActive = (activeKey as KeyStateType)?.includes(key);

    const props: PanelProps = {
      panelKey: key,
      active: isActive,
      onClick: _onClick,
    };
    const newElement = React.cloneElement(child, props);
    return newElement;
  };

  const _renderChildren = () => {
    // get list child
    const childList = isFragment(children) ? children.props : children;
    const newChildren = Children.map(childList, _renderNewChild);

    if (isFragment(children as ReactElement)) {
      return <Fragment>{newChildren}</Fragment>;
    }

    return newChildren;
  };

  return (
    <CollapseStateProvider value={{ activeKey, defaultActiveKey, disabled }}>
      <CollapseDispatchProvider value={{ onChange: _handleOnChange }}>{_renderChildren()}</CollapseDispatchProvider>
    </CollapseStateProvider>
  );
};

Collapse.Panel = Panel;

export default Collapse;
