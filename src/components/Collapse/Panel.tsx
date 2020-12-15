import React, { CSSProperties, FC, ReactNode, useState } from 'react';
import { BorderStyle, BorderWidth, ColorNames, LineAwesome, Radius, Text, View } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';
import styles from './Collapse.module.scss';
import { useCollapseState } from './hooks/useCollapseState';

export interface PanelProps {
  children?: ReactNode;
  /** className của panel */
  className?: string;
  /** Title header của panel */
  header?: ReactNode;
  /** Bật lên sẽ hiển thị mũi tên bên góc phải */
  showArrow?: boolean;
  /** Panel đang được active sẽ hiển thị */
  active?: boolean;
  /** Id key của panel */
  panelKey?: string;
  /** Style properties của panel */
  style?: CSSProperties;
  /** Bật lên panel sẽ bị mờ và không bấm được vào */
  disabled?: boolean;
  /** Radius vủa panel */
  radius?: Radius;
  /** Background color của panel */
  backgroundColor?: ColorNames;
  /** Kiểu border của panel */
  borderStyle?: BorderStyle;
  /** Độ rộng của border */
  borderWidth?: BorderWidth;
  /** Màu của border */
  borderColor?: ColorNames;
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
  borderWidth = '1/6',
  borderStyle = 'solid',
  onClick,
}) => {
  const [activePanel, setActive] = useState(active);
  const stateContext = useCollapseState();

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

  const disabledClass = disabled ? 'ui-disabled' : '';
  const combineProps = { className: classNames(className, styles.panelContainer, disabledClass), style };
  const activeClass = activePanel ? styles.panelActive : styles.panelInactive;
  const expandIcon = activePanel ? <LineAwesome name="angle-down" /> : <LineAwesome name="angle-right" />;

  return (
    <View
      {...combineProps}
      key={panelKey}
      tachyons={['mb2']}
      wilokeStyles={activePanel ? ['pl-12', 'pr-12', 'pb-16'] : ['pl-12', 'pr-12']}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      radius={radius}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
    >
      {/* header */}
      <View tachyons={['flex', 'items-center', 'justify-between']} onClick={_handleClick}>
        <View tachyons={['flex', 'items-center', 'flex-grow-1']} className={styles.headerPanel}>
          <Text size={14} color="gray9">
            {header}
          </Text>
        </View>
        <View className={styles.icon}>{showArrow && expandIcon}</View>
      </View>

      {/* content */}
      <View backgroundColor={backgroundColor} tagName="div" wilokeStyles="pt-6" className={classNames(styles.panelContent, activeClass)}>
        {children}
      </View>
    </View>
  );
};

export default memoization(Panel);
