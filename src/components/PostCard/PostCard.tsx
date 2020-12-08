import React, { FC } from 'react';
import { Image, LineAwesome, Text, View } from 'wiloke-react-core';
import { memoization } from 'wiloke-react-core/utils';
import PostCardLoading from './PostCardLoading';

export interface PostCardProps {
  title: string;
  previewSrc: string;
  imageSrc: string;
  category: string;
}

interface PostCardFC extends FC<PostCardProps> {
  Loading: typeof PostCardLoading;
}

const PostCard: PostCardFC = ({ title, previewSrc, imageSrc, category }) => {
  return (
    <View backgroundColor="light" radius="round" tachyons={['relative', 'overflow-hidden']}>
      <Image previewSrc={previewSrc} src={imageSrc} lazyLoad aspectRatioInPercent={56.25} />
      <View backgroundColor="tertiary" color="light" radius={4} tachyons={['absolute', 'top-1', 'left-1', 'ph3', 'pv1']} nightModeBlacklist="all">
        {category}
      </View>
      <View tachyons={['pa3', 'flex', 'justify-between', 'items-center']}>
        <Text tagName="h2" tachyons={['w-80', 'nowrap', 'f6']}>
          {title}
        </Text>
        <LineAwesome name="share" size={20} />
      </View>
    </View>
  );
};

PostCard.Loading = PostCardLoading;

export default memoization(PostCard);
