import React, { CSSProperties, FC, ReactNode } from 'react';
import { View, withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Box.module.scss';

export interface BoxProps extends WithStylesProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const BoxComponent: FC<BoxProps> = ({
  tachyons,
  borderColor,
  borderStyle,
  borderWidth,
  backgroundColor = 'light',
  style,
  children,
  radius = 'round',
  ...rest
}) => {
  const combineProps = { style, className: classNames(styles.container) };
  return (
    <View
      {...rest}
      {...combineProps}
      radius={radius}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      tachyons={tachyons}
    >
      {children}
    </View>
  );
};

const Box = withStyles<HTMLElement, BoxProps>(BoxComponent);

export default Box;
