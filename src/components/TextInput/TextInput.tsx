import React, { ChangeEvent, DOMAttributes, FC, InputHTMLAttributes, useCallback } from 'react';
import { Size, withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './TextInput.module.scss';

type HtmlInputType = 'text' | 'password' | 'number' | 'email';

export interface TextInputProps extends WithStylesProps {
  /** Kich thuoc cua input */
  size?: Size;
  /** Gia tri cua input */
  value?: string;
  /** Bat len input co width 100% */
  block?: boolean;
  /** Text hien thi khi input chua duoc nhap */
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  /** Border cua input*/
  bordered?: boolean;
  /** DefaultValue */
  defaultValue?: string;
  /** disabled */
  disabled?: boolean;
  /** type HTMLInput */
  type?: HtmlInputType;
  /** name cua input */
  name?: InputHTMLAttributes<HTMLInputElement>['name'];
  /** Su kien onChange lay cac event cua input */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** Su kien onChange de lay value */
  onChangeText?: (value: string) => void;
  /** Su kien khi nguoi dung nhan enter*/
  onPressEnter?: DOMAttributes<HTMLInputElement>['onKeyDown'];
}

const TextInputComponent: FC<TextInputProps> = ({
  size = 'medium',
  type = 'text',
  disabled = false,
  bordered = true,
  placeholder,
  name,
  block = false,
  value,
  className,
  defaultValue,
  onChangeText,
  onChange,
  ...rest
}) => {
  const sizeClass = styles[size];
  const disabledClassName = disabled ? styles.disabled : '';
  const borderedClassName = bordered ? styles.bordered : '';
  const blockClassName = block ? styles.block : '';
  const classes = classNames(styles.container, sizeClass, blockClassName, disabledClassName, borderedClassName, className);

  const _handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(event);
      onChangeText?.(event.target.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <input
      {...rest}
      className={classes}
      value={value}
      onChange={_handleChange}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
    />
  );
};

const TextInput = withStyles<HTMLElement, TextInputProps>(TextInputComponent, {
  backgroundColor: 'light',
  radius: 5,
  color: 'gray6',
});

export default TextInput;
