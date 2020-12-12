import React, { memo, FC } from 'react';
import { View, Text, Image, ViewProps } from 'wiloke-react-core';
import avatarColors from './avatarColors';

export interface AvatarProps extends Pick<ViewProps, 'radius' | 'className'> {
  /** Kích thước của avatar */
  size?: number;
  /** Tên user */
  name?: string;
  /** Avatar uri */
  uri?: string;
}

const Avatar: FC<AvatarProps> = ({ uri, size = 30, name = '', ...rest }) => {
  const textSize = size / 2 < 30 ? size / 2 : 30;
  const nameMatch = name.match(/^[^0-9]|\d/g);
  const text = !!name ? (!!nameMatch ? nameMatch[0].toUpperCase() : '') : '';
  const backgroundIndex = Math.floor(text.charCodeAt(0) % avatarColors.length);
  const backgroundColor = avatarColors[backgroundIndex];

  if (!!uri) {
    return <Image src={uri} previewSrc={uri} width={size} aspectRatioInPercent={100} radius="pill" />;
  }

  return (
    <View radius="pill" {...rest} tachyons={['flex', 'justify-center', 'items-center']} style={{ backgroundColor, width: size, height: size }}>
      {!!name && (
        <Text size={textSize} style={{ lineHeight: textSize * 2, color: '#fff' }}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default memo(Avatar);
