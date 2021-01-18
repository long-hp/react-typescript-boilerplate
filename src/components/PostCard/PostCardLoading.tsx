import React, { FC, memo } from 'react';
import { View } from 'wiloke-react-core';
import * as css from './styles';

export interface PostCardLoadingProps {}

const PostCardLoading: FC<PostCardLoadingProps> = () => {
  return (
    <View backgroundColor="light" radius={15} css={css.container}>
      <View backgroundColor="gray4" aspectRatioInPercent={56.25} />
      <View backgroundColor="gray5" radius={4} css={[css.cat, { opacity: '0.6', height: '32px', width: '80px' }]} />
      <View css={[css.content, { height: '50px' }]}>
        <View backgroundColor="gray4" radius={4} height={10} css={{ width: '70%', height: '10px', whiteSpace: 'nowrap' }} />
        <View backgroundColor="gray4" radius={4} css={{ width: '20px', height: '20px', whiteSpace: 'nowrap' }} />
      </View>
    </View>
  );
};

export default memo(PostCardLoading);
