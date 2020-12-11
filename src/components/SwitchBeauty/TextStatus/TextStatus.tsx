import React, { FC } from 'react';
import { ColorNames, Size, Text, View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './TextStatus.module.scss';

export interface TextStatusProps {
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
  /** className */
  className?: string;
}

const TextStatus: FC<TextStatusProps> = ({
  enable = false,
  enableText = 'Enable',
  disableText = 'Disabled',
  size = 'medium',
  fontSize,
  enableColor = 'success',
  disableColor = 'gray7',
  className,
}) => {
  const sizeClass = styles[size];

  const classes = classNames(styles.container, sizeClass, className);
  return (
    <View className={classes}>
      <Text size={fontSize} color={enable ? enableColor : disableColor}>
        {enable ? enableText : disableText}
      </Text>
    </View>
  );
};

export default TextStatus;
