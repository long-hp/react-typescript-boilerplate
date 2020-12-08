import { CheckboxProps } from 'components/Checkbox';
import React, { FC, useContext, useEffect, useState } from 'react';
import { ColorNames, Size, Text } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';
import RadioGroupContext from './context';
import styles from './Radio.module.scss';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';

type TypeRadioProps = Pick<CheckboxProps, 'checked' | 'size' | 'disabled' | 'defaultChecked' | 'onChange' | 'className' | 'activeColor'>;

export interface RadioProps extends TypeRadioProps {
  /** Value radio input html */
  value?: any;
  /** Name radio input html */
  name?: string;
  /** kieu cua radio */
  type?: 'default' | 'button';
  /**  */
  block?: boolean;
  /** Color text khi active radio button */
  textActiveColor?: ColorNames;
}

const Radio: FC<RadioProps> & {
  Group: typeof RadioGroup;
  Button: typeof RadioButton;
} = ({
  size = 'medium',
  checked,
  defaultChecked = false,
  disabled = false,
  children,
  className,
  value,
  type = 'default',
  name,
  textActiveColor = 'light',
  activeColor = 'primary',
  block = true,
  onChange,
}) => {
  const context = useContext(RadioGroupContext);
  if (context) {
    name = context.name;
    checked = String(value) === context.value;
    disabled = disabled || (context.disabled as boolean);
    size = context.size as Size;
    activeColor = context.activeColor as ColorNames;
    textActiveColor = context.textActiveColor as ColorNames;
  }
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const checkedClass = checkedState ? styles.checked : '';
  const sizeClass = styles[size];
  const disabledClass = disabled ? styles.disabled : '';
  const classes = classNames(styles.container, checkedClass, disabledClass, sizeClass, className);

  const checkedRadioButtonClass = checkedState ? styles.checkedRadioButton : '';
  const disabledRadioButtonClass = disabled ? styles.disabledRadioButton : '';
  const blockRadioButtonClass = block ? styles.blockRadioButton : '';
  const classesRadioButon = classNames(
    styles.radioButtonContainer,
    disabledRadioButtonClass,
    checkedRadioButtonClass,
    blockRadioButtonClass,
    sizeClass,
    className,
  );

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
        <Text tagName="label" className={classes}>
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
            <Text tagName="span" borderColor={checkedState && !disabled ? activeColor : 'gray5'} className={styles.control}>
              <Text backgroundColor={checkedState && !disabled ? activeColor : 'gray5'} className={styles.dot}></Text>
            </Text>
          </Text>
          {children && <Text tagName="span">{children}</Text>}
        </Text>
      ) : (
        <Text
          backgroundColor={checkedState && !disabled ? activeColor : 'light'}
          color={checkedState ? textActiveColor : 'dark'}
          tagName="label"
          className={classesRadioButon}
        >
          <Text tagName="span" className={classNames(styles.radioButton, sizeClass, checkedRadioButtonClass, disabledRadioButtonClass)}>
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

export default memoization(Radio);
