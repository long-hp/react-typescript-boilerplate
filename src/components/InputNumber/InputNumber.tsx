import React, { ChangeEvent, DOMAttributes, FC, InputHTMLAttributes, useCallback, useEffect, useState } from 'react';
import { Size, Text, View, withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './InputNumber.module.scss';

export interface InputNumberProps extends WithStylesProps {
  /** Kich thuoc cua input */
  size?: Size;
  /** Gia tri cua input */
  value?: number;
  /** Bat len input co width 100% */
  block?: boolean;
  /** Text hien thi khi input chua duoc nhap */
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  /** Border cua input*/
  bordered?: boolean;
  /** DefaultValue */
  defaultValue?: number;
  /** disabled */
  disabled?: boolean;
  /** Gia tri nho nhat */
  min?: number;
  /** Gia tri lon nhat */
  max?: number;
  /** name cua input */
  name?: InputHTMLAttributes<HTMLInputElement>['name'];
  /** Su kien onChange lay cac event cua input */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** Su kien onChange de lay value */
  onChangeNumber?: (value: number) => void;
  /** Su kien khi nguoi dung nhan enter*/
  onPressEnter?: DOMAttributes<HTMLInputElement>['onKeyDown'];
}

const InputNumberComponent: FC<InputNumberProps> = ({
  size = 'small',
  disabled = false,
  bordered = true,
  name,
  block = false,
  placeholder,
  value,
  className,
  defaultValue,
  min = 0,
  max = 10,
  onChangeNumber,
  onChange,
  ...rest
}) => {
  const [counter, setCounter] = useState(min);
  const sizeClass = styles[size];
  const disabledClassName = disabled ? styles.disabled : '';
  const borderedClassName = bordered ? styles.bordered : '';
  const blockClassName = block ? styles.block : '';
  const classes = classNames(styles.container, sizeClass, blockClassName, disabledClassName, borderedClassName, className);

  useEffect(() => {
    value && setCounter(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    onChangeNumber?.(counter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const _handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(event);
      onChangeNumber?.(Number(event.target.value));
      setCounter(Number(event.target.value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _handleIncrement = () => {
    if (counter >= max) {
      setCounter(max);
    } else {
      setCounter(counter => counter + 1);
    }
  };

  const _handleDecrement = () => {
    if (counter <= min) {
      setCounter(min);
      console.log(min);
    } else {
      setCounter(counter => counter - 1);
    }
  };

  return (
    <View {...rest} className={classes}>
      <View className={styles.handlerWrap}>
        <Text tagName="span" onClick={_handleIncrement} className={classNames(styles.handlerDefault, styles.handlerUp)}>
          <i className="las la-angle-up"></i>
        </Text>
        <Text tagName="span" onClick={_handleDecrement} className={classNames(styles.handlerDefault, styles.handlerDown)}>
          <i className="las la-angle-down"></i>
        </Text>
      </View>
      <View className={styles.inputWrap}>
        <input
          {...rest}
          value={counter}
          onChange={_handleChange}
          name={name}
          disabled={disabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
          min={min}
          max={max}
          type="number"
        />
      </View>
    </View>
  );
};

const InputNumber = withStyles<HTMLElement, InputNumberProps>(InputNumberComponent, {
  backgroundColor: 'light',
  radius: 3,
  color: 'gray6',
});

export default InputNumber;
