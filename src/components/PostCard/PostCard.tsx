import React, { FC, memo } from 'react';
import { Image, LineAwesome, Text, View } from 'wiloke-react-core';

export interface PostCardProps {
  title: string;
  previewSrc: string;
  imageSrc: string;
  category: string;
}

const PostCard: FC<PostCardProps> = ({ title, previewSrc, imageSrc, category }) => {
  return (
    <View backgroundColor="light" radius="round" tachyons={['relative', 'overflow-hidden']}>
      <Image previewSrc={previewSrc} src={imageSrc} lazyLoad aspectRatioInPercent={56.25} />
      <View backgroundColor="tertiary" color="light" radius={4} tachyons={['absolute', 'top-1', 'left-1', 'ph3', 'pv1']} nightModeBlacklist="all">
        {category}
      </View>
      <View tachyons={['pa3', 'flex', 'justify-between', 'items-center']}>
        <Text numberOfLines={1} tagName="h2" tachyons={['w-80', 'nowrap', 'f6']}>
          {title}
        </Text>
        <LineAwesome name="share" size={20} />
      </View>
    </View>
  );
};

export default memo(PostCard);
