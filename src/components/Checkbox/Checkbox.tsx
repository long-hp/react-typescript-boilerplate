import React, { FC, InputHTMLAttributes, useState } from 'react';
import { Size, Text, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends WithStylesProps {
  /** Kich thuoc checkbox */
  size?: Size;
  /** Trang thai cua checkbox */
  checked?: boolean;
  /** Trang thai default cua checkbox */
  defaultChecked?: boolean;
  /** Trang thai khong duoc check */
  indeterminate?: boolean;
  /** Disabled Checkbox */
  disabled?: boolean;
  /** Su kien onChange */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

const Checkbox: FC<CheckboxProps> = ({ size = 'small', defaultChecked = true, disabled, children, className, onChange, ...rest }) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const checkedClass = checkedState ? styles.check : '';
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

export default Checkbox;
