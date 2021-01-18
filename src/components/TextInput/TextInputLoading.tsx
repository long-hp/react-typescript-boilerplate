import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import * as css from './styles';

export interface TextInputLoadingProps {}

const TextInputLoading: FC<TextInputLoadingProps> = () => {
  return (
    <View css={css.loadingContainer}>
      <View css={css.loadingInner} />
    </View>
  );
};

export default TextInputLoading;
