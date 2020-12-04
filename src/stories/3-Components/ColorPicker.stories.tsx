import React, { useState } from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import ColorPicker, { ColorPickerProps } from 'components/ColorPicker';
import getOptions from 'stories/utils/getOptions';
import { ColorResult, HSLColor, RGBColor } from 'react-color';
import { decimalToHex } from 'utils/functions/decimalToHex';
import { Text, View } from 'wiloke-react-core';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
};

export const Default = () => {
  const onlyShowColorBoard = boolean('Only show color picker board', false);

  const selectType = select(
    'Color Picker Platform',
    getOptions<ColorPickerProps['pickerType'][]>(['chrome', 'photoshop', 'sketch']),
    'chrome',
  );

  const selectStrategy = select(
    'Color Picker Strategy',
    getOptions<ColorPickerProps['strategy'][]>(['absolute', 'fixed']),
    'fixed',
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
    r: 0,
    g: 0,
    b: 0,
    a: 0.5,
  });

  const _onChangeColorPicker = (color: ColorResult) => {
    if (color.hsl !== colorState) {
      setRgbColor(color.rgb);
      setColorState(color.hsl);
      const hexCode = `${color.hex}${decimalToHex(Number(color.rgb.a))}`;
      setColorPreview(hexCode);
    }
  };

  return (
    <View tachyons={['flex', 'justify-between', 'w-100']}>
      <ColorPicker
        pickerType={selectType}
        color={colorState}
        colorPicker={rgbColor}
        placement={selectPlacement}
        strategy={selectStrategy}
        onlyShowColorBoard={onlyShowColorBoard}
        onChange={_onChangeColorPicker}
      />
      <View>
        <Text color="gray9">Hex: {colorPreview}</Text>
        <Text color="gray9">
          RGB: rgba({rgbColor.r}, {rgbColor.g}, {rgbColor.b}, {rgbColor.a})
        </Text>
        <Text color="gray9">
          HSL: hsla({colorState.h.toFixed(4)}, {colorState.s.toFixed(2)}, {colorState.l.toFixed(2)}, {colorState.a})
        </Text>
      </View>
    </View>
  );
};
