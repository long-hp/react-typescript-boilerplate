import React, { FC, memo, ReactNode } from 'react';
import { View } from 'wiloke-react-core';

export interface CheckboxLoadingProps {}

const CheckboxLoading: FC<CheckboxLoadingProps> = () => {
  return (
    <View height={30} tachyons={['flex', 'items-center']}>
      <View width={30} height={'100%'} backgroundColor="gray5" radius={2}></View>
      <View width={200} height={'100%'} tachyons={'ml2'} backgroundColor="gray5"></View>
    </View>
  );
};

export default memo(CheckboxLoading);
