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
  borderColor,
  borderStyle,
  borderWidth,
  className,
  backgroundColor = 'light',
  style,
  children,
  tachyons,
  radius = 'round',
  ...rest
}) => {
  const combineProps = { style, className: classNames(className, styles.container) };
  return (
    <View
      {...rest}
      {...combineProps}
      tachyons={tachyons}
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
