import React, { FC } from 'react';
import { Size, Text, View, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Status.module.scss';

export interface StatusProps extends WithStylesProps {
  /** Size */
  size?: Size;
  /** Status cua component */
  enable?: boolean;
  /** Trang thai sau khi enable */
  statusAfter?: string;
  /** Trang thai truoc khi enable */
  statusBefore?: string;
  /** color status khi enable */
  colorAfter?: WithStylesProps['color'];
  /** color status khi enable */
  colorBefore?: WithStylesProps['color'];
  /**Font size*/
  fontSize?: number;
}

const Status: FC<StatusProps> = ({
  enable = false,
  statusAfter = 'Enable',
  statusBefore = 'Disabled',
  className,
  style,
  size = 'medium',
  fontSize,
  colorAfter = 'success',
  colorBefore = 'gray7',
  ...rest
}) => {
  const enableClass = enable ? styles.enable : '';
  const sizeClass = styles[size];
  const styleInline = {
    fontSize,
    ...style,
  };
  const classes = classNames(styles.container, sizeClass, enableClass, className);

  return (
    <View {...rest} className={classes} style={styleInline}>
      {enable ? <Text color={colorAfter}>{statusAfter}</Text> : <Text color={colorBefore}>{statusBefore}</Text>}
    </View>
  );
};

export default Status;
