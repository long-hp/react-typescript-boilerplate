import React, { FC, memo } from 'react';
import { Image, LineAwesome, Text, View } from 'wiloke-react-core';

export interface PostCardProps {
  title: string;
  imageSrc: string;
  category: string;
}

const PostCard: FC<PostCardProps> = ({ title, imageSrc, category }) => {
  return (
    <View backgroundColor="light" radius="round" tachyons={['relative', 'overflow-hidden']}>
      <Image src={imageSrc} aspectRatioInPercent={56.25} />
      <View backgroundColor="tertiary" color="light" radius={4} tachyons={['absolute', 'top-1', 'left-1', 'ph3', 'pv1']} nightModeBlacklist="all">
        {category}
      </View>
      <View tachyons={['pa3', 'flex', 'justify-between', 'items-center']}>
        <Text tagName="h4" tachyons={['w-80', 'nowrap']}>
          {title}
        </Text>
        <LineAwesome name="share" size={20} />
      </View>
    </View>
  );
};

export default memo(PostCard);
