import React, { FC } from 'react';
import { View } from 'wiloke-react-core';

export interface RangeBeautyLoadingProps {}

const RangeBeautyLoading: FC<RangeBeautyLoadingProps> = () => {
  return (
    <View tachyons={['relative', 'overflow-hidden']}>
      <View backgroundColor="gray5" width={300} height={20} radius={4} tachyons={['mb2']} />
      <View tachyons={['pv2', 'pl4', 'pr3', 'flex', 'items-center']} backgroundColor="gray5" radius={6}>
        <View height={4} tachyons={['flex-grow-1', 'relative']} radius={4} backgroundColor="gray4">
          <View
            width={23}
            height={23}
            radius={50}
            tachyons={['absolute', 'left--1']}
            backgroundColor="gray4"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
          <View
            width={23}
            height={23}
            radius={50}
            tachyons={['absolute', 'left-2']}
            backgroundColor="gray4"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </View>
        <View width={50} height={28} tachyons={['ml3']} backgroundColor="gray4" radius={8} />
        <View width={50} height={28} tachyons={['ml3']} backgroundColor="gray4" radius={8} />
      </View>
      <View backgroundColor="gray5" width={100} height={20} radius={4} tachyons={['mt2']} />
    </View>
  );
};

export default RangeBeautyLoading;
