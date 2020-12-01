import { SizeInput } from 'components/TextInput/TextInput';
import React, { ChangeEvent, FC, InputHTMLAttributes, useCallback } from 'react';
import { withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './NumberInput.module.scss';
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
  /** Sự kiện onChange của input */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** Sự kiện onChangeText của input, trả về dữ liệu dạng string(chuỗi) */
  onChangeNumber?: (number: number) => void;
}

const NumberInputComponent: FC<NumberInputProps> = ({
  sizeInput = 'small',
  block = false,
  type = 'number',
  value = 0,
  disabled = false,
  className,
  inputProps,
  onChange,
  onChangeNumber,
  ...rest
}) => {
  const blockClassName = block ? styles.block : '';
  const disableClassName = disabled ? styles.disabled : '';
  const generalSetting = { className: classNames(styles.container, className, styles[sizeInput], blockClassName, disableClassName) };

  const _handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChangeNumber?.(Number(event.target.value));
      onChange?.(event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <input {...rest} {...generalSetting} {...inputProps} type={type} value={value} onChange={_handleChange} disabled={disabled} />;
};

const NumberInput = withStyles<HTMLInputElement, NumberInputProps>(NumberInputComponent, {
  color: 'gray8',
  backgroundColor: 'light',
  borderColor: 'gray5',
  borderWidth: '1/6',
  borderStyle: 'solid',
});

export default NumberInput;
