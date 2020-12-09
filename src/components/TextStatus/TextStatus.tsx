import React, { FC } from 'react';
import { ColorNames, FontFamilyNames, FontWeight, Size, Text, View, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './TextStatus.module.scss';

export interface TextStatusProps extends WithTachyonsProps {
  /** Size */
  size?: Size;
  /** Status cua component */
  enable?: boolean;
  /** Text sau khi enable */
  enableText?: string;
  /** Text truoc khi enable */
  disableText?: string;
  /** color khi enable */
  enableColor?: ColorNames;
  /** color status khi disable */
  disableColor?: ColorNames;
  /** Font size*/
  fontSize?: number;
  /** Font Family */
  fontFamily?: FontFamilyNames;
  /** Font Weight */
  fontWeight?: FontWeight;
}

const TextStatus: FC<TextStatusProps> = ({
  enable = false,
  enableText = 'Enable',
  disableText = 'Disabled',
  className,
  style,
  size = 'medium',
  fontSize,
  enableColor = 'success',
  disableColor = 'gray7',
  fontFamily = 'primary',
  fontWeight = '400',
  ...rest
}) => {
  const sizeClass = styles[size];
  const styleInline = {
    fontSize,
    ...style,
  };
  const classes = classNames(styles.container, sizeClass, className);

  return (
    <View {...rest} fontFamily={fontFamily} fontWeight={fontWeight} className={classes} style={styleInline}>
      {enable ? <Text color={enableColor}>{enableText}</Text> : <Text color={disableColor}>{disableText}</Text>}
    </View>
  );
};

export default TextStatus;
