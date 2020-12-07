import React, { FC, memo } from 'react';
import { View } from 'wiloke-react-core';

export interface RangeSliderLoadingProps {}

const RangeSliderLoading: FC<RangeSliderLoadingProps> = () => {
  return (
    <View height={6} tachyons={['flex-grow-1', 'relative']} radius={4} backgroundColor="gray5">
      <View
        width={23}
        height={23}
        radius={50}
        tachyons={['absolute', 'left--1']}
        backgroundColor="gray6"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </View>
  );
};

export default memo(RangeSliderLoading);
