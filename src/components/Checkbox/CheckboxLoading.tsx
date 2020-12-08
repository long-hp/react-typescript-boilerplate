import React, { FC, memo } from 'react';
import { Radius, View } from 'wiloke-react-core';

export interface CheckboxLoadingProps {
  radius?: Radius;
}

const CheckboxLoading: FC<CheckboxLoadingProps> = ({ radius = 'square' }) => {
  return (
    <View height={24} tachyons={['flex', 'items-center']}>
      <View width={24} height={24} backgroundColor="gray4" radius={radius}></View>
      <View width={80} height={10} tachyons={'ml2'} backgroundColor="gray4" radius={radius}></View>
    </View>
  );
};

export default memo(CheckboxLoading);
