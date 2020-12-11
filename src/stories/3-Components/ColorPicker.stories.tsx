import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, select } from '@storybook/addon-knobs';
import ColorPicker, { ColorPickerProps } from 'components/ColorPicker';
import { decimalToHex } from 'components/ColorPicker/decimalToHex';
import React, { useState } from 'react';
import { ColorResult, HSLColor, RGBColor } from 'react-color';
import getOptions from 'stories/utils/getOptions';
import { Radius, Text, View } from 'wiloke-react-core';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  const onlyShowColorBoard = boolean('Only show color picker board', false);

  const radiusType = optionsKnob<'css style' | 'number'>('Radius Picker Type', getOptions(['css style', 'number']), 'number', {
    display: 'inline-radio',
  });

  const radius =
    radiusType === 'css style'
      ? select<Radius>(
          'Radius Picker',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius Picker', 5, { range: true, min: 0, max: 100 });

  const selectType = select(
    'Color Picker Platform',
    getOptions<ColorPickerProps['pickerType'][]>(['chrome', 'photoshop', 'sketch']),
    'sketch',
  );

  const selectPlacement = select(
    'Placement',
    getOptions<ColorPickerProps['placement'][]>([
      'bottom',
      'bottom-end',
      'bottom-start',
      'top',
      'top-end',
      'top-start',
      'left',
      'left-end',
      'left-start',
      'right',
      'right-end',
      'right-start',
    ]),
    'bottom-start',
  );

  const [colorPreview, setColorPreview] = useState('#333333');
  const [colorState, setColorState] = useState<HSLColor>({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1,
  });
  const [rgbColor, setRgbColor] = useState<RGBColor>({
    r: 51,
    g: 51,
    b: 51,
    a: 1,
  });

  const _onChangeColorPicker = (color: ColorResult) => {
    setRgbColor(color.rgb);
    setColorState(color.hsl);
    const hexCode = `${color.hex}${decimalToHex(Number(color.rgb.a))}`;
    setColorPreview(hexCode);
    action('onChange')(color);
  };

  return (
    <View tachyons={['flex', 'justify-between', 'w-100', 'pa4']}>
      {isLoading ? (
        <ColorPicker.Loading />
      ) : (
        <ColorPicker
          pickerType={selectType}
          color={colorState}
          colorPicker={rgbColor}
          placement={selectPlacement}
          radius={radius}
          onlyShowColorBoard={onlyShowColorBoard}
          onChange={_onChangeColorPicker}
        />
      )}

      <View>
        <Text color="gray9">Hex: {colorPreview}</Text>
        <Text color="gray9">
          RGB: rgba({rgbColor.r}, {rgbColor.g}, {rgbColor.b}, {rgbColor.a})
        </Text>
      </View>
    </View>
  );
};
