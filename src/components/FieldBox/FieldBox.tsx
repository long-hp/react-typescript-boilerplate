import React, { CSSProperties, FC } from 'react';
import { useStyleSheet, View, ViewProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import * as css from './styles';

export interface BoxProps extends ViewProps {
  style?: CSSProperties;
  className?: string;
}

const Box: FC<BoxProps> = ({
  borderColor = 'gray5',
  borderStyle = 'solid',
  borderWidth = 1,
  backgroundColor = 'light',
  radius = 5,
  className,
  style,
  children,
  ...rest
}) => {
  const { styles } = useStyleSheet();
  const combineProps = { style, className: classNames(className, styles(css.container)), ...rest };
  return (
    <View
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
