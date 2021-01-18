import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import * as css from './styles';

export interface NumberInputLoadingProps {}

const NumberInputLoading: FC<NumberInputLoadingProps> = () => {
  return <View css={css.loadingContainer} />;
};

export default NumberInputLoading;
