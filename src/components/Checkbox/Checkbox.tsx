import React, { FC, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { Size, Text, WithTachyonsProps } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';
import styles from './Checkbox.module.scss';
import CheckboxLoading from './CheckboxLoading';

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

interface CheckboxFC extends FC<CheckboxProps> {
  Loading: typeof CheckboxLoading;
}

const Checkbox: CheckboxFC = ({ size = 'medium', checked, defaultChecked = false, disabled = false, children, className, onChange, ...rest }) => {
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
    if (typeof checked !== 'undefined') {
      setCheckedState(!!checked);
    }
  }, [checked]);

  return (
    <Text {...rest} tagName="label" className={classes} tachyons={['inline-flex', 'items-center']}>
      <Text tagName="span" className={classNames(styles.checkbox, sizeClass, checkedClass, disabledClass)}>
        <input disabled={disabled} className={styles.checkboxInput} checked={checkedState} type="checkbox" onChange={_handleChange} />
        <Text tagName="span" className={styles.control}></Text>
      </Text>
      {children && <Text tagName="span">{children}</Text>}
    </Text>
  );
};

Checkbox.Loading = CheckboxLoading;

export default memoization(Checkbox);
