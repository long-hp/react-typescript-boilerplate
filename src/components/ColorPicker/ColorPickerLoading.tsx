import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import * as css from './styles';

export interface ColorPickerLoadingProps {}

const ColorPickerLoading: FC<ColorPickerLoadingProps> = () => {
  return <View css={css.loadingContainer} />;
};

export default ColorPickerLoading;
