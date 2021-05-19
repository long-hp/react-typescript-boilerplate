import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import { ColorNames, Size, Text, useStyleSheet } from 'wiloke-react-core';
import { memoization } from 'wiloke-react-core/utils';
import { useRadioAction, useRadioState } from './context';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';
import * as css from './styles';

export type Value = string | number;

export type RadioVariant = 'default' | 'button';

export interface RadioProps {
  /** Size cua Radio va RadioButton */
  size?: Size;
  /** Trang thai checked cua Radio */
  checked?: boolean;
  /** Value radio input html */
  value?: Value;
  /** Name radio input html */
  name?: string;
  /** kieu cua radio */
  variant?: RadioVariant;
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
  checked = false,
  defaultChecked = false,
  disabled = false,
  children,
  value,
  variant = 'default',
  name,
  textActiveColor = 'light',
  activeColor = 'primary',
  block = false,
  onChange,
  onChangeValue,
}) => {
  const { styles } = useStyleSheet();
  const stateContext = useRadioState();
  const onChangeContext = useRadioAction();
  if (stateContext) {
    name = stateContext.name;
    checked = String(value) === stateContext.value;
    disabled = disabled || (stateContext.disabled as boolean);
    size = stateContext.size as Size;
    activeColor = stateContext.activeColor as ColorNames;
    textActiveColor = stateContext.textActiveColor as ColorNames;
  }
  const [checkedState, setCheckedState] = useState(defaultChecked);

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.(event);
    onChangeValue?.(event.target.value);
    onChangeContext?.(event);
  };

  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  const _renderRadioNative = () => {
    return (
      <input
        name={name}
        className={styles(css.radioNative(variant))}
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
        borderWidth={2}
        borderStyle="solid"
        css={css.control(size)}
      >
        <Text radius="pill" css={[css.dotCheckBackground(checkedState, disabled, activeColor), css.dot(size, checked)]} />
      </Text>
    );
  };

  return (
    <>
      {variant === 'default' ? (
        <Text tagName="label" css={css.container(disabled, size)}>
          <Text tagName="span" css={css.radioWrapper}>
            {_renderRadioNative()}
            {_renderRadioIcon()}
          </Text>
          {children && (
            <Text css={{ padding: `0 8px`, display: 'inline-block', verticalAlign: 'middle' }} tagName="span">
              {children}
            </Text>
          )}
        </Text>
      ) : (
        <Text
          color={checkedState ? textActiveColor : 'gray9'}
          tagName="label"
          borderStyle="solid"
          borderColor="inherit"
          css={[
            css.disabled(disabled),
            css.radioButtonCheckBackground(checkedState, disabled, activeColor),
            css.block(block),
            css.radioButtonContainer(size),
          ]}
        >
          <Text tagName="span" css={css.radioButtonWrapper}>
            {_renderRadioNative()}
          </Text>
          {children && (
            <Text css={{ position: 'relative', zIndex: 999 }} tagName="span">
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
