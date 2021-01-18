import React, { ChangeEvent, FC, InputHTMLAttributes, useCallback } from 'react';
import { Size, useStyleSheet, View, ViewProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import * as css from './styles';
import TextInputLoading from './TextInputLoading';

type InputType = 'text' | 'password' | 'email';
export interface InputProps extends ViewProps {
  /** Size của input */
  sizeInput?: Exclude<Size, 'extra-small'>;
  /** Placeholder của input */
  placeholder?: string;
  /** Bật lên input sẽ rộng 100% */
  block?: boolean;
  /** Kiểu đầu vào của input */
  type?: InputType;
  /** Giá trị đầu vào của input */
  value?: string;
  /** Khi bật disabled thì nút mờ đi và không thể thực hiện event */
  disabled?: boolean;
  /** Sự kiện onChange của input */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** Sự kiện onValueChange của input, trả về dữ liệu dạng string(chuỗi) */
  onValueChange?: (text: string) => void;
}

const TextInput: FC<InputProps> & {
  Loading: typeof TextInputLoading;
} = ({
  className,
  sizeInput = 'large',
  placeholder = '',
  block = false,
  type = 'text',
  value,
  disabled = false,
  borderColor = 'gray5',
  borderStyle = 'solid',
  borderWidth = 1,
  color = 'gray8',
  backgroundColor,
  radius = 5,
  onChange,
  onValueChange,
  ...rest
}) => {
  const { styles } = useStyleSheet();

  const _handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onValueChange?.(event.target.value);
      onChange?.(event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      {...rest}
      className={classNames(className, 'TextInput-container')}
      css={css.container(sizeInput, block, disabled)}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      radius={radius}
    >
      <input
        className={styles(css.input(sizeInput))}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={_handleChange}
      />
    </View>
  );
};

TextInput.Loading = TextInputLoading;

export default TextInput;
