import React, { FC, memo } from 'react';
import { View } from 'wiloke-react-core';

export interface PostCardLoadingProps {}

const PostCardLoading: FC<PostCardLoadingProps> = () => {
  return (
    <View backgroundColor="light" radius="round" tachyons={['relative', 'overflow-hidden']}>
      <View backgroundColor="gray4" aspectRatioInPercent={56.25} />
      <View backgroundColor="gray5" opacity="60/100" height={32} width={80} radius={4} tachyons={['absolute', 'top-1', 'left-1', 'ph3', 'pv1']} />
      <View tachyons={['pa3', 'flex', 'justify-between', 'items-center']} height={52}>
        <View backgroundColor="gray4" radius={4} height={10} tachyons={['w-70', 'nowrap', 'f6']} />
        <View backgroundColor="gray4" radius={4} height={20} width={20} tachyons={['nowrap', 'f6']} />
      </View>
    </View>
  );
};

export default memo(PostCardLoading);
