import React, { FC, memo } from 'react';
import { View } from 'wiloke-react-core';

export interface CheckboxLoadingProps {}

const CheckboxLoading: FC<CheckboxLoadingProps> = () => {
  return (
    <View height={24} tachyons={['flex', 'items-center']}>
      <View width={24} height={'100%'} backgroundColor="gray4" radius={5}></View>
      <View width={150} height={'100%'} tachyons={'ml2'} backgroundColor="gray4"></View>
    </View>
  );
};

export default memo(CheckboxLoading);
