import React, { FC } from 'react';
import { Image, LineAwesome, Text, View } from 'wiloke-react-core';
import { memoization } from 'wiloke-react-core/utils';
import PostCardLoading from './PostCardLoading';
import * as css from './styles';

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
    <View backgroundColor="light" radius={15} css={css.container}>
      <Image previewSrc={previewSrc} src={imageSrc} lazyLoad aspectRatioInPercent={56.25} />
      <View backgroundColor="tertiary" color="light" radius={4} css={css.cat} nightModeBlacklist="all">
        {category}
      </View>
      <View css={css.content}>
        <Text tagName="h2" css={{ width: '80%' }} size={16} numberOfLines={1}>
          {title}
        </Text>
        <LineAwesome name="share" size={20} />
      </View>
    </View>
  );
};

PostCard.Loading = PostCardLoading;

export default memoization(PostCard);
