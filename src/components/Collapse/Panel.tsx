import React, { FC, ReactNode, useState } from 'react';
import { LineAwesome, Text, View, ViewProps } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';
import { useCollapseState } from './hooks/useCollapseState';
import * as css from './styles';

export interface PanelProps
  extends Pick<ViewProps, 'borderWidth' | 'borderStyle' | 'borderColor' | 'backgroundColor' | 'radius' | 'className' | 'style'> {
  children?: ReactNode;
  /** Title header của panel */
  header?: ReactNode;
  /** Bật lên sẽ hiển thị mũi tên bên góc phải */
  showArrow?: boolean;
  /** Panel đang được active sẽ hiển thị */
  active?: boolean;
  /** Id key của panel */
  panelKey?: string;
  /** Bật lên panel sẽ bị mờ và không bấm được vào */
  disabled?: boolean;
  /** Sự kiện onClick */
  onClick?: (panelKey: string) => void;
}

const Panel: FC<PanelProps> = ({
  showArrow = true,
  active = false,
  disabled = false,
  panelKey,
  header = 'Panel header',
  style,
  className,
  children,
  radius = 5,
  backgroundColor = 'gray2',
  borderColor = 'gray5',
  borderWidth = 1,
  borderStyle = 'solid',
  onClick,
}) => {
  const [activePanel, setActive] = useState(active);
  const stateContext = useCollapseState();
  const expandIcon = activePanel ? <LineAwesome name="angle-down" /> : <LineAwesome name="angle-right" />;

  if (stateContext) {
    disabled = disabled || (stateContext.disabled as boolean);
  }

  const _handleClick = () => {
    if (disabled) {
      return;
    }
    setActive(activePanel => !activePanel);
    onClick?.(panelKey as string);
  };

  return (
    <View
      key={panelKey}
      className={classNames(className, 'Collapse-container')}
      css={[css.container(activePanel), css.disabled(disabled)]}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      style={style}
      radius={radius}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
    >
      {/* header */}
      <View css={css.headerContainer} onClick={_handleClick}>
        <View css={css.headerPanel}>
          <Text numberOfLines={1} css={css.headerText} color="gray9">
            {header}
          </Text>
        </View>
        <View css={css.headerIcon}>{showArrow && expandIcon}</View>
      </View>

      {/* content */}
      <View backgroundColor={backgroundColor} tagName="div" css={css.panelContainer(activePanel)}>
        {children}
      </View>
    </View>
  );
};

export default memoization(Panel);
