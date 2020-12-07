import React, { FC } from 'react';
import { View } from 'wiloke-react-core';

export interface RangeLoadingProps {}

const RangeLoading: FC<RangeLoadingProps> = () => {
  return (
    <View height={3} tachyons={['flex-grow-1', 'relative']} radius={4} backgroundColor="gray5">
      <View
        width={20}
        height={20}
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

export default RangeLoading;
