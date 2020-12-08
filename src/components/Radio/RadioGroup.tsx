import useMergedState from 'hooks/useMergedState';
import React, { ChangeEvent, FC, InputHTMLAttributes, memo, ReactNode } from 'react';
import { ColorNames, Size, View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import { RadioGroupContextProvider } from './context';
import Radio from './Radio';
import styles from './Radio.module.scss';

export interface Optional {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** Size cua tat ca Radio */
  size?: Size;
  /** Gia tri mac dinh duoc chon */
  defaultValue?: any;
  /** Childrent Optional */
  options?: string[] | Optional[];
  /** html name cua chilren*/
  name?: InputHTMLAttributes<HTMLInputElement>['name'];
  /** Value */
  value?: any;
  /** Disable tat ca radio */
  disabled?: boolean;
  /** Color khi active */
  activeColor?: ColorNames;
  /** Color text khi active radio button*/
  textActiveColor?: ColorNames;
  /**Children cua radio group*/
  children?: ReactNode;
  /** Block radio */
  block?: boolean;
  /** Su kien onChange */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

const RadioGroup: FC<RadioGroupProps> = ({
  activeColor = 'primary',
  textActiveColor = 'light',
  size = 'medium',
  options,
  name,
  disabled,
  value,
  children,
  block = false,
  defaultValue,
  onChange,
}) => {
  const [valueState, setValueState] = useMergedState(String(defaultValue), {
    value: value,
  });
  const blockGroupClass = block ? styles.blockGroup : '';
  const classes = classNames(styles.groupContaner, blockGroupClass);

  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const lastValue = valueState;
    const val = event.target.value;
    if (!value) {
      setValueState(val);
    }
    if (onChange && val !== lastValue) {
      onChange(event);
    }
  };

  const _renderGroup = () => {
    let childrenToRender = children;
    if (options && options.length > 0) {
      childrenToRender = (options as Array<string | Optional>).map(option => {
        if (typeof option === 'string') {
          return (
            <Radio size={size} key={option} disabled={disabled} value={option} checked={value === option}>
              {option}
            </Radio>
          );
        }
        return (
          <Radio size={size} key={option.value} disabled={option.disabled || disabled} value={option.value} checked={value === option.value}>
            {option.label}
          </Radio>
        );
      });
    }

    return (
      <View className={classes} tachyons="dib">
        {childrenToRender}
      </View>
    );
  };

  return (
    <RadioGroupContextProvider
      value={{
        onChange: _handleChange,
        value: valueState,
        disabled: disabled,
        name: name,
        size,
        activeColor,
        block,
        textActiveColor,
      }}
    >
      {_renderGroup()}
    </RadioGroupContextProvider>
  );
};

export default memo(RadioGroup);
