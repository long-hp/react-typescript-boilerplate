import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
export interface ColorPickerLoadingProps {}

const ColorPickerLoading: FC<ColorPickerLoadingProps> = () => {
  return <View width={46} height={23} backgroundColor="gray5" radius={6} />;
};

export default ColorPickerLoading;
