import React, { ChangeEvent, FC, InputHTMLAttributes, useCallback } from 'react';
import { withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
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
  /** Sự kiện onChangeText của input, trả về dữ liệu dạng string(chuỗi) */
  onChangeText?: (text: string) => void;
}

const InputComponent: FC<InputProps> = ({
  className,
  sizeInput = 'medium',
  placeholder = '',
  block = false,
  type = 'text',
  value,
  disabled = false,
  onChange,
  onChangeText,
  ...rest
}) => {
  const blockClassName = block ? styles.block : '';
  const disableClassName = disabled ? styles.disabled : '';
  const generalSetting = { className: classNames(styles.container, className, styles[sizeInput], blockClassName, disableClassName) };

  const _handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChangeText?.(event.target.value);
      onChange?.(event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <input {...rest} {...generalSetting} type={type} value={value} onChange={_handleChange} placeholder={placeholder} disabled={disabled} />;
};

const TextInput = withStyles<HTMLInputElement, InputProps>(InputComponent, {
  color: 'gray8',
  backgroundColor: 'light',
  borderColor: 'gray4',
  borderWidth: '2/6',
  borderStyle: 'solid',
});

export default TextInput;
