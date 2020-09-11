import React, { CSSProperties, FC, ReactNode, ButtonHTMLAttributes, DOMAttributes } from 'react';
import classNames from 'utils/functions/classNames';
import styles from './Button.module.scss';

export interface ButtonProps {
  /** React children */
  children: ReactNode;
  /** Thuộc tính href của thẻ a */
  href?: string;
  /** Thuộc tính type của thẻ button */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** Các kích thước của button */
  size?: 'small' | 'medium' | 'large';
  /** Thuộc tính class của button */
  className?: string;
  /** Thuộc tính style của button */
  style?: CSSProperties;
  /** Sự kiện click */
  onClick?: DOMAttributes<HTMLElement>['onClick'];
}

/** Component `button` có thể là thẻ a hoặc thẻ button */
const Button: FC<ButtonProps> = ({ children, href, style, className, type = 'button', onClick, size = 'medium' }) => {
  const generalProps = { style, className: classNames(styles.container, className, styles[size]) };
  if (!!href) {
    return (
      <a {...generalProps} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button {...generalProps} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
