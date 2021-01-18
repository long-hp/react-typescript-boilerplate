import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import * as css from './styles';

export interface ColorPickerBeautyLoadingProps {}

const ColorPickerBeautyLoading: FC<ColorPickerBeautyLoadingProps> = () => {
  return (
    <View css={css.loadingContainer}>
      <View css={css.loadingInner}>
        <View css={{ flexGrow: 1 }}>
          <View css={css.loadingInnerLeft} />
        </View>
        <View css={css.loadingInnerRight} />
      </View>
    </View>
  );
};
export default ColorPickerBeautyLoading;
