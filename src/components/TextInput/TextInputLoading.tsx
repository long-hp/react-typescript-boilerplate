import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
export interface TextInputLoadingProps {}

const TextInputLoading: FC<TextInputLoadingProps> = () => {
  return (
    <View width={200} height={36} backgroundColor="gray5" radius={6} tachyons="relative">
      <View
        tachyons={['absolute', 'left-1', 'w-40']}
        height={4}
        radius={4}
        backgroundColor="gray4"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />
    </View>
  );
};

export default TextInputLoading;
