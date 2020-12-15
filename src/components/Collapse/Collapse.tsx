import React, { Children, FC, ReactElement, useCallback, useState } from 'react';
import { CollapseDispatchProvider, CollapseStateProvider } from './context/CollapseContext';
import { useCollapseDispatch } from './hooks/useCollapseDispatch';
import Panel, { PanelProps } from './Panel';
import { parseValueToArray } from './utils/parseValueToArray';

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

  const _handleChange = (key: KeyStateType) => {
    if (!activeKey) {
      setActiveStateKey(key as string[]);
    }
    onChange?.(key);
    dispatchContext?.onChange?.(key);
  };

  const _handlePanelClick = useCallback(
    (key: string) => {
      const _activeKey = [...activeStateKey];
      const idx = _activeKey.indexOf(key);
      const isActive = idx > -1;

      if (isActive) {
        _activeKey.splice(idx, 1); // remove key when panel is not active
      } else {
        _activeKey.push(key); // add key to array when click
      }

      _handleChange(_activeKey);
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
      onClick: _handlePanelClick,
    };
    const newElement = React.cloneElement(child, props);
    return newElement;
  };

  const _renderChildren = () => {
    return Children.map(children as ReactElement, _renderNewChild);
  };

  return (
    <CollapseStateProvider value={{ activeKey, defaultActiveKey, disabled }}>
      <CollapseDispatchProvider value={{ onChange: _handleChange }}>{_renderChildren()}</CollapseDispatchProvider>
    </CollapseStateProvider>
  );
};

Collapse.Panel = Panel;

export default Collapse;
