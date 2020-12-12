import React, { FC } from 'react';
import { View } from 'wiloke-react-core';

export interface NumberInputLoadingProps {}

const NumberInputLoading: FC<NumberInputLoadingProps> = () => {
  return <View width={60} height={28} backgroundColor="gray5" radius={5} />;
};

export default NumberInputLoading;
