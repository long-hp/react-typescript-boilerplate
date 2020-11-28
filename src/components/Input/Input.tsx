import React, { CSSProperties, FC, InputHTMLAttributes } from 'react';
import { withTachyons, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Input.module.scss';

type Size = 'small' | 'medium' | 'large';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, WithTachyonsProps {
  sizeInput?: Size;
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
}

const InputComponent: FC<InputProps> = ({
  style,
  className,
  sizeInput = 'medium',
  placeholder = 'Do something...',
  borderRadius = 0,
  onChange,
  ...rest
}) => {
  const generalSetting = { style, className: classNames(styles.container, className, styles[sizeInput]) };
  return <input {...rest} {...generalSetting} onChange={onChange} placeholder={placeholder} style={{ borderRadius: `${borderRadius}px` }} />;
};

const Input = withTachyons<HTMLInputElement, InputProps>(InputComponent);

export default Input;
