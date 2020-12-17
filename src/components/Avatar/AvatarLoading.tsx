import React, { memo, FC } from 'react';
import { ColorNames, View } from 'wiloke-react-core';

export interface AvatarLoadingProps {
  size?: number;
  color?: ColorNames;
}

const AvatarLoading: FC<AvatarLoadingProps> = ({ size = 30, color = 'gray2' }) => {
  return <View radius="pill" style={{ width: size, height: size }} backgroundColor={color} />;
};

export default memo(AvatarLoading);
