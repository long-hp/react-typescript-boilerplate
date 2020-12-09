import React, { ChangeEvent, FC, InputHTMLAttributes, useCallback } from 'react';
import { View, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import TextInputLoading from './TextInputLoading';
import styles from './TextInput.module.scss';

export type SizeInput = 'small' | 'medium' | 'large';
type InputType = 'text' | 'password' | 'email';
export interface InputProps extends WithStylesProps {
  /** Size của input */
  sizeInput?: SizeInput;
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
  borderColor,
  borderStyle,
  borderWidth,
  color,
  backgroundColor,
  onChange,
  onValueChange,
  ...rest
}) => {
  const blockClassName = block ? styles.block : '';
  const disableClassName = disabled ? styles.disabled : '';
  const generalSetting = { className: classNames(styles.container, className, styles[sizeInput], blockClassName, disableClassName) };

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
      {...generalSetting}
      tachyons={['relative', 'overflow-hidden']}
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
    >
      <input type={type} value={value} placeholder={placeholder} disabled={disabled} className={styles.textInput} onChange={_handleChange} />
    </View>
  );
};

TextInput.Loading = TextInputLoading;

export default TextInput;
