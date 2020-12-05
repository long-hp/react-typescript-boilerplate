import React, { FC, InputHTMLAttributes, memo, ReactNode, useEffect, useState } from 'react';
import { Size, Text, withTachyons, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends WithTachyonsProps {
  /** Kich thuoc checkbox */
  size?: Size;
  /** Trang thai cua checkbox */
  checked?: boolean;
  /** Trang thai default cua checkbox */
  defaultChecked?: boolean;
  /** Disabled Checkbox */
  disabled?: boolean;
  children?: ReactNode;
  /** Su kien onChange */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

const CheckboxComponent: FC<CheckboxProps> = ({
  size = 'small',
  checked = false,
  defaultChecked = false,
  disabled = false,
  children,
  className,
  onChange,
  ...rest
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const checkedClass = checkedState ? styles.checked : '';
  const sizeClass = styles[size];
  const disabledClass = disabled ? styles.disabled : '';
  const classes = classNames(styles.container, disabledClass, sizeClass, className);

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.(e);
  };

  useEffect(() => {
    if (checked) {
      setCheckedState(!!checked);
    }
  }, [checked]);
  return (
    <Text {...rest} tagName="label" className={classes} tachyons={['flex', 'items-center']}>
      <Text tagName="span" className={classNames(styles.checkboxInput, sizeClass, checkedClass, disabledClass)}>
        <input disabled={disabled} checked={checkedState} type="checkbox" onChange={_handleChange} />
        <Text tagName="span" className={styles.control}></Text>
      </Text>
      <Text tagName="span">{children}</Text>
    </Text>
  );
};

const Checkbox = withTachyons<HTMLElement, CheckboxProps>(CheckboxComponent);

export default memo(Checkbox);
