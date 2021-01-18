import React, { FC } from 'react';
import { View, Text, Image, ViewProps } from 'wiloke-react-core';
import { memoization } from 'wiloke-react-core/utils';
import avatarColors from './avatarColors';
import AvatarLoading from './AvatarLoading';
import * as css from './styles';

export interface AvatarProps extends Pick<ViewProps, 'radius' | 'className'> {
  /** Kích thước của avatar */
  size?: number;
  /** Tên user */
  name?: string;
  /** Avatar uri */
  uri?: string;
}

interface AvatarStatic {
  Loading: typeof AvatarLoading;
}

const Avatar: FC<AvatarProps> & AvatarStatic = ({ uri, size = 30, name = '', ...rest }) => {
  const textSize = size / 2 < 30 ? size / 2 : 30;
  const nameMatch = name.match(/^[^0-9]|\d/g);
  const text = !!name ? (!!nameMatch ? nameMatch[0].toUpperCase() : '') : '';
  const backgroundIndex = Math.floor(text.charCodeAt(0) % avatarColors.length);
  const backgroundColor = avatarColors[backgroundIndex];

  if (!!uri) {
    return <Image src={uri} previewSrc={uri} width={size} aspectRatioInPercent={100} radius="pill" />;
  }

  return (
    <View radius="pill" {...rest} css={[css.container(size), css.background(backgroundColor)]}>
      {!!name && (
        <Text size={textSize} css={{ lineHeight: `${textSize * 2}px`, color: '#fff' }}>
          {text}
        </Text>
      )}
    </View>
  );
};

Avatar.Loading = AvatarLoading;

export default memoization(Avatar);
