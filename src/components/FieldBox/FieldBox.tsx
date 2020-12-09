import React, { CSSProperties, FC, ReactNode } from 'react';
import { View, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './FieldBox.module.scss';

export interface BoxProps extends WithStylesProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Box: FC<BoxProps> = ({
  tachyons,
  borderColor,
  borderStyle,
  borderWidth,
  className,
  backgroundColor = 'light',
  style,
  children,
  radius = 'round',
  ...rest
}) => {
  const combineProps = { style, className: classNames(className, styles.container) };
  return (
    <View
      {...rest}
      tachyons={tachyons}
      {...combineProps}
      radius={radius}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
    >
      {children}
    </View>
  );
};

export default Box;
