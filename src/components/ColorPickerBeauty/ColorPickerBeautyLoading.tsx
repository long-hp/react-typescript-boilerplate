import React, { FC } from 'react';
import { View } from 'wiloke-react-core';

export interface ColorPickerBeautyLoadingProps {}

const ColorPickerBeautyLoading: FC<ColorPickerBeautyLoadingProps> = () => {
  return (
    <View tachyons={['relative', 'overflow-hidden']}>
      <View backgroundColor="gray5" width={300} height={20} radius={4} tachyons={['mb2']} />
      <View tachyons={['pv2', 'pl3', 'pr3', 'flex', 'items-center']} backgroundColor="gray5" radius={6}>
        <View tachyons={['flex-grow-1']}>
          <View width={50} height={28} backgroundColor="gray4" radius={8} />
        </View>
        <View height={4} width={200} tachyons={['ml3']} radius={4} backgroundColor="gray4" />
      </View>
      <View backgroundColor="gray5" width={100} height={20} radius={4} tachyons={['mt2']} />
    </View>
  );
};
export default ColorPickerBeautyLoading;
