import Status from 'components/Status/Status';
import Switch from 'components/Switch';
import React, { FC, useState } from 'react';
import { View, withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './StatusBar.module.scss';

type Size = 'small' | 'middle' | 'large';

export interface StatusBarProps extends WithStylesProps {
  /** Kich thuoc cua Statusbar */
  size?: Size;
  /** Gia tri cua input */
  status?: string;
  /** Bat len input co width 100% */
  block?: boolean;
  /** Border cua box*/
  bordered?: boolean;
  /** disabled */
  disabled?: boolean;
  /**Trang thai default*/
  defaultStatus?: boolean;
}

const StatusBarComponent: FC<StatusBarProps> = ({
  block = false,
  size = 'large',
  disabled = false,
  bordered = true,
  defaultStatus = false,
  className,
  ...rest
}) => {
  const [checked, setChecked] = useState(defaultStatus);
  const sizeClass = styles[size];
  const disabledClassName = disabled ? styles.disabled : '';
  const borderedClassName = bordered ? styles.bordered : '';
  const blockClassName = block ? styles.block : '';
  const classes = classNames(styles.container, sizeClass, blockClassName, disabledClassName, borderedClassName, className);

  const _handleSwitch = () => {
    setChecked(checked => !checked);
  };

  return (
    <View {...rest} className={classes} tachyons={['flex', 'items-center', 'justify-between']}>
      <Switch defaultChecked={checked} onChange={_handleSwitch} />
      <Status enable={checked} />
    </View>
  );
};

const StatusBar = withStyles<HTMLElement, StatusBarProps>(StatusBarComponent, {
  backgroundColor: 'light',
  radius: 5,
  color: 'gray6',
});

export default StatusBar;
