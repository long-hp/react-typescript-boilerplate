import React, { FC, InputHTMLAttributes, useEffect } from 'react';
import { Size, useStyleSheet, View, ViewProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import Action from './Actions';
import NumberInputLoading from './NumberInputLoading';
import * as css from './styles';
import useCount from './useCount';

type InputType = 'number' | 'phone';
export interface NumberInputProps extends ViewProps {
  /** Size của input */
  sizeInput?: Exclude<Size, 'extra-small'>;
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
  /** Sự kiện onValueChange của input, trả về dữ liệu dạng string(chuỗi) */
  onValueChange?: (number: number) => void;
}

const NumberInput: FC<NumberInputProps> & {
  Loading: typeof NumberInputLoading;
} = ({
  sizeInput = 'medium',
  type = 'number',
  value = 0,
  min = 0,
  max = 10,
  step = 1,
  block = false,
  disabled = false,
  className,
  color = 'gray8',
  backgroundColor = 'light',
  borderColor = 'gray5',
  borderWidth = 1,
  borderStyle = 'solid',
  onValueChange,
  onChange,
  ...rest
}) => {
  const { styles } = useStyleSheet();

  const { count, decrement, increment, setCount } = useCount({
    min: min,
    max: max,
    step: step,
    value: value,
  });

  useEffect(() => {
    onValueChange?.(count);
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
      className={classNames(className, 'NumberInput-container')}
      css={css.container(sizeInput, block, disabled)}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
    >
      <input
        className={styles(css.input(sizeInput))}
        type={type}
        min={min}
        max={max}
        step={step}
        value={count}
        disabled={disabled}
        onChange={_handleChange}
      />

      <View css={css.actions} backgroundColor="transparent">
        <Action increment={_onIncrement} decrement={_onDecrement} size={sizeInput} />
      </View>
    </View>
  );
};
NumberInput.Loading = NumberInputLoading;

export default NumberInput;
