import React, { CSSProperties, FC } from 'react';
import { View, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './FieldBox.module.scss';

export interface BoxProps extends WithStylesProps {
  style?: CSSProperties;
  className?: string;
}

const Box: FC<BoxProps> = ({
  borderColor = 'gray5',
  borderStyle = 'solid',
  borderWidth = '1/6',
  backgroundColor = 'light',
  radius = 5,
  className,
  style,
  children,
  tachyons,
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
