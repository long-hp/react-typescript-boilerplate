import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
export interface NumberInputLoadingProps {}

const NumberInputLoading: FC<NumberInputLoadingProps> = () => {
  return <View width={50} height={28} backgroundColor="gray5" radius={8} />;
};

export default NumberInputLoading;
