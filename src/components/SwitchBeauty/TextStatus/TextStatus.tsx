import React, { FC } from 'react';
import { ColorNames, Size, Text, View } from 'wiloke-react-core';
import * as css from './styles';

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
}

const TextStatus: FC<TextStatusProps> = ({
  enable = false,
  enableText = 'Enable',
  disableText = 'Disabled',
  size = 'medium',
  enableColor = 'success',
  disableColor = 'gray7',
}) => {
  return (
    <View css={css.container(size)}>
      <Text color={enable ? enableColor : disableColor}>{enable ? enableText : disableText}</Text>
    </View>
  );
};

export default TextStatus;
