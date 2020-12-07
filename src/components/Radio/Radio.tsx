import { CheckboxProps } from 'components/Checkbox';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Text, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import RadioGroupContext from './context';
import styles from './Radio.module.scss';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';

export interface RadioProps extends WithTachyonsProps, CheckboxProps {
  value?: any;
  name?: string;
  type?: 'default' | 'button';
}

interface RadioFc extends FC<RadioProps> {
  Group: typeof RadioGroup;
  Button: typeof RadioButton;
}

const Radio: RadioFc = ({
  size = 'medium',
  checked,
  defaultChecked = false,
  disabled = false,
  children,
  className,
  value,
  type = 'default',
  onChange,
  name,
  ...rest
}) => {
  const context = useContext(RadioGroupContext);
  if (context) {
    name = context.name;
    checked = String(value) === context.value;
    disabled = disabled || (context.disabled as boolean);
  }
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const checkedClass = checkedState ? styles.checked : '';
  const sizeClass = styles[size];
  const disabledClass = disabled ? styles.disabled : '';
  const classes = classNames(styles.container, checkedClass, disabledClass, sizeClass, className);

  useEffect(() => {
    console.log(context);
  }, [context]);

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.(e);
    if (context?.onChange) {
      context.onChange(e);
    }
  };

  useEffect(() => {
    if (typeof checked !== 'undefined') {
      setCheckedState(!!checked);
    }
  }, [checked]);

  return (
    <>
      {type === 'default' ? (
        <Text {...rest} tagName="label" className={classes}>
          <Text tagName="span" className={classNames(styles.radio, sizeClass, checkedClass, disabledClass)}>
            <input
              name={name}
              className={styles.radioInput}
              disabled={disabled}
              checked={checkedState}
              type="radio"
              onChange={_handleChange}
              value={value}
            />
            <Text tagName="span" className={styles.control}></Text>
          </Text>
          {children && <Text tagName="span">{children}</Text>}
        </Text>
      ) : (
        <Text {...rest} tagName="label" className={classNames(classes, styles.radioButtonContainer)}>
          <Text tagName="span" className={classNames(styles.radioButton, sizeClass, checkedClass, disabledClass)}>
            <input
              name={name}
              disabled={disabled}
              className={styles.radioButonInput}
              checked={checkedState}
              type="radio"
              onChange={_handleChange}
              value={value}
            />
            <Text tagName="span" className={styles.controlButton}></Text>
          </Text>
          {children && <Text tagName="span">{children}</Text>}
        </Text>
      )}
    </>
  );
};

Radio.Group = RadioGroup;
Radio.Button = RadioButton;

export default Radio;
