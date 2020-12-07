import { SizeInput } from 'components/TextInput/TextInput';
import React, { FC, InputHTMLAttributes, useEffect } from 'react';
import { View, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import CounterAction from './Actions';
import styles from './NumberInput.module.scss';
import NumberInputLoading from './NumberInputLoading';
import useCount from './useCount';
type InputType = 'number' | 'phone';
interface InputBaseComponentProps extends React.HTMLAttributes<HTMLInputElement> {
  [arbitrary: string]: any;
}

export interface NumberInputProps extends WithStylesProps {
  /** Chứa các properties ban đầu của input */
  inputProps?: InputBaseComponentProps;
  /** Size của input */
  sizeInput?: SizeInput;
  /** Bật lên input sẽ rộng 100% */
  block?: boolean;
  /** Kiểu đầu vào của input */
  type?: InputType;
  /** Giá trị đầu vào của input */
  value?: number;
  /** Khi bật disabled thì nút mờ đi và không thể thực hiện event */
  disabled?: boolean;
  /** Giá trị nhỏ nhất của input */
  min?: number;
  /** Giá trị lớn nhất của input */
  max?: number;
  /** Bước nhảy cho mỗi lần tăng / giảm giá trị */
  step?: number;
  /** Sự kiện onChange của input */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** Sự kiện onChangeText của input, trả về dữ liệu dạng string(chuỗi) */
  onChangeNumber?: (number: number) => void;
}

interface NumberInputFC extends FC<NumberInputProps> {
  Loading: typeof NumberInputLoading;
}

const NumberInput: NumberInputFC = ({
  sizeInput = 'medium',
  type = 'number',
  value = 0,
  min = 0,
  max = 10,
  step = 1,
  block = false,
  disabled = false,
  className,
  inputProps,
  color = 'gray8',
  backgroundColor = 'light',
  borderColor = 'gray5',
  borderWidth = '1/6',
  borderStyle = 'solid',
  onChangeNumber,
  onChange,
  ...rest
}) => {
  const blockClassName = block ? styles.block : '';
  const disableClassName = disabled ? styles.disabled : '';
  const generalSetting = { className: classNames(styles.container, className, styles[sizeInput], blockClassName, disableClassName) };

  const { count, decrement, increment, setCount } = useCount({
    min: min,
    max: max,
    step: step,
    value: value,
  });

  useEffect(() => {
    onChangeNumber?.(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    setCount(Number(event.target.value));
  };

  const _onIncrement = () => increment(step);
  const _onDecrement = () => decrement(step);

  return (
    <View
      {...rest}
      {...generalSetting}
      tachyons={['relative', 'overflow-hidden']}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
    >
      <input
        {...inputProps}
        className={styles.input}
        type={type}
        min={min}
        max={max}
        step={step}
        value={count}
        disabled={disabled}
        onChange={_handleChange}
      />

      <View tachyons={['absolute', 'top-0', 'right-0', 'h-100']} backgroundColor="transparent">
        <CounterAction increment={_onIncrement} decrement={_onDecrement} />
      </View>
    </View>
  );
};
NumberInput.Loading = NumberInputLoading;

export default NumberInput;
