import React, { FC, InputHTMLAttributes, useContext, useEffect, useState } from 'react';
import { ColorNames, Size, Text } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';
import RadioGroupContext from './context';
import styles from './Radio.module.scss';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';

export type RadioType = 'default' | 'button';

export interface RadioProps {
  /** Size cua Radio va RadioButton */
  size?: Size;
  /** Trang thai checked cua Radio */
  checked?: boolean;
  /** Value radio input html */
  value?: any;
  /** Name radio input html */
  name?: string;
  /** kieu cua radio */
  type?: RadioType;
  /**className*/
  className?: string;
  /** Trang thai disabled cua Radio*/
  disabled?: boolean;
  /** block cua RadioButton */
  block?: boolean;
  /** Trang thai default cua Radio */
  defaultChecked?: boolean;
  /** Color khi active Radio */
  activeColor?: ColorNames;
  /** Color text khi active radio button */
  textActiveColor?: ColorNames;
  /** Su kien onChange */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** Su kien onChange lay value */
  onChangeValue?: (value: string) => void;
}

interface RadioStatic {
  Group: typeof RadioGroup;
  Button: typeof RadioButton;
}

const Radio: FC<RadioProps> & RadioStatic = ({
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
  onChangeValue,
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
  const classesRadioButton = classNames(
    styles.radioButtonContainer,
    disabledRadioButtonClass,
    checkedRadioButtonClass,
    blockRadioButtonClass,
    sizeClass,
    className,
  );

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.(event);
    onChangeValue?.(event.target.value);
    if (context?.onChange) {
      context.onChange(event);
    }
  };

  useEffect(() => {
    if (typeof checked !== 'undefined') {
      setCheckedState(!!checked);
    }
  }, [checked]);

  const classNameRadioNative: Record<RadioType, string> = {
    default: classNames('absolute', 'absolute--fill', 'z-1', 'o-0'),
    button: classNames('w-0', 'h-0', 'o-0'),
  };

  const _renderRadioNative = () => {
    return (
      <input
        name={name}
        className={classNameRadioNative[type]}
        disabled={disabled}
        checked={checkedState}
        type="radio"
        onChange={_handleChange}
        value={value}
      />
    );
  };

  const _renderRadioIcon = () => {
    return (
      <Text
        tagName="span"
        borderColor={checkedState && !disabled ? activeColor : 'gray5'}
        radius="pill"
        borderWidth="2/6"
        borderStyle="solid"
        tachyons={['relative', 'db', 'flex', 'justify-center', 'items-center']}
        className={styles.control}
      >
        <Text backgroundColor={checkedState && !disabled ? activeColor : 'gray5'} className={styles.dot} radius="pill"></Text>
      </Text>
    );
  };

  return (
    <>
      {type === 'default' ? (
        <Text tagName="label" className={classes} tachyons={['inline-flex', 'items-center', 'pointer']}>
          <Text tagName="span" tachyons={['relative', 'dib', 'v-mid']} className={classNames(styles.radio, sizeClass, checkedClass, disabledClass)}>
            {_renderRadioNative()}
            {_renderRadioIcon()}
          </Text>
          {children && (
            <Text tachyons={['ph2', 'dib', 'v-mid']} tagName="span">
              {children}
            </Text>
          )}
        </Text>
      ) : (
        <Text
          backgroundColor={checkedState && !disabled ? activeColor : 'light'}
          color={checkedState ? textActiveColor : 'dark'}
          tagName="label"
          tachyons={['relative', 'dib', 'tc', 'pointer']}
          borderColor="gray5"
          borderStyle="solid"
          className={classesRadioButton}
        >
          <Text
            tagName="span"
            tachyons={['absolute', 'top-0', 'left-0', 'w-100', 'h-100']}
            className={classNames(styles.radioButton, sizeClass, checkedRadioButtonClass, disabledRadioButtonClass)}
          >
            {_renderRadioNative()}
          </Text>
          {children && (
            <Text tachyons={['relative', 'z-999']} tagName="span">
              {children}
            </Text>
          )}
        </Text>
      )}
    </>
  );
};

Radio.Group = RadioGroup;
Radio.Button = RadioButton;

export default memoization(Radio);
