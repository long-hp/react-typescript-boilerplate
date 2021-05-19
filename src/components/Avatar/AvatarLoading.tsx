import React, { memo, FC } from 'react';
import { ColorNames, View } from 'wiloke-react-core';
import * as css from './styles';

export interface AvatarLoadingProps {
  size?: number;
  color?: ColorNames;
}

const AvatarLoading: FC<AvatarLoadingProps> = ({ size = 30, color = 'gray2' }) => {
  return <View radius="pill" css={css.container(size)} backgroundColor={color} />;
};

export default memo(AvatarLoading);
