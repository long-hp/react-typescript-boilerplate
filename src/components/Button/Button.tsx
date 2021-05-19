import React, { ReactNode, DOMAttributes, ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { View, ActivityIndicator, Size, Text, useStyleSheet, ViewProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import * as css from './styles';

export interface ButtonProps extends ViewProps {
  /** React children */
  children: ReactNode;
  /** Các kích thước của button */
  size?: Size;
  /** Bật lên sẽ dài full 100% */
  block?: boolean;
  /** Thuộc tính href của thẻ a */
  href?: string;
  /** Thuộc tính target của thẻ a nhưng bỏ "_" ở trước */
  target?: 'blank' | 'self' | 'parent' | 'top';
  /** Set css font-size */
  fontSize?: number;
  /** Khi bật disabled thì nút mờ đi và không thể thực hiện event */
  disabled?: boolean;
  /** Khi bật lên thì sẽ hiển thị icon loading bên trái */
  loading?: boolean;
  /** Thuộc tính type của thẻ button */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** Sự kiện click */
  onClick?: DOMAttributes<HTMLElement>['onClick'];
}

const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      href,
      children,
      target = 'self',
      className,
      size = 'medium',
      block = false,
      onClick,
      disabled = false,
      loading = false,
      type = 'button',
      fontSize,
      style,
      borderWidth,
      backgroundColor = 'primary',
      color = 'light',
      radius = 'square',
      ...rest
    },
    ref,
  ) => {
    const { styles } = useStyleSheet();
    const props: ViewProps = {
      ...rest,
      className: classNames(styles(css.container(size, borderWidth), css.block(block), css.disabled(disabled), css.fontSize(fontSize)), className),
      style,
      backgroundColor,
      radius,
      color,
      ...(disabled ? {} : { onClick }),
    };
    const renderChildren = () => {
      return (
        <>
          {loading && <ActivityIndicator size={18} className={styles(css.loading)} />}
          <Text tagName="span" css={css.text}>
            {children}
          </Text>
        </>
      );
    };
    if (!!href) {
      return (
        <View tagName="a" ref={ref as Ref<HTMLAnchorElement>} href={href} rel="noopener noreferrer" target={`_${target}`} {...props}>
          {renderChildren()}
        </View>
      );
    }
    return (
      <View tagName="button" ref={ref as Ref<HTMLButtonElement>} type={type} {...props}>
        {renderChildren()}
      </View>
    );
  },
);

export default Button;
