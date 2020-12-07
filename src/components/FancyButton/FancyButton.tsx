import React, { forwardRef, HTMLAttributes, ReactNode, Ref } from 'react';
import { withStyles, WithStylesProps } from 'wiloke-react-core';
import styles from './FancyButton.module.scss';

export interface FancyButtonComponentProps extends WithStylesProps {
  children: ReactNode;
  color?: WithStylesProps['color'];
  backgroundColor?: WithStylesProps['backgroundColor'];
  fontSize?: number;
}

const FancyButtonComponent = forwardRef<HTMLElement, FancyButtonComponentProps>(({ children, color, backgroundColor, fontSize = 20, style }, ref) => {
  const props: HTMLAttributes<HTMLElement> = {
    style: {
      color: color,
      backgroundColor: backgroundColor,
      fontSize: `${fontSize}px`,
      ...style,
    },
  };
  return (
    <button {...props} className={styles.container} ref={ref as Ref<HTMLButtonElement>}>
      {children}
    </button>
  );
});

const FanyButton = withStyles<HTMLElement, FancyButtonComponentProps>(FancyButtonComponent, {
  backgroundColor: 'facebook',
  color: 'dark',
  radius: 'round',
});
export default FanyButton;
