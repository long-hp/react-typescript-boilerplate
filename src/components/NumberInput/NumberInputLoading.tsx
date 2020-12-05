import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
export interface NumberInputLoadingProps {}

const NumberInputLoading: FC<NumberInputLoadingProps> = () => {
  return <View width={60} height={32} backgroundColor="gray5" radius={4} />;
};

export default NumberInputLoading;
