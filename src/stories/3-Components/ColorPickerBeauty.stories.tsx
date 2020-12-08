import { boolean, number, select } from '@storybook/addon-knobs';
import { decimalToHex } from 'components/ColorPicker/decimalToHex';
import ColorPickerBeauty, { ColorPickerBeautyProps } from 'components/ColorPickerBeauty';
import React, { useState } from 'react';
import { ColorResult, HSLColor, RGBColor } from 'react-color';
import getOptions from 'stories/utils/getOptions';
import { defaultColors, Text, View } from 'wiloke-react-core';

export default {
  title: 'Components/ColorPickerBeauty',
  component: ColorPickerBeauty,
};

export const Default = () => {
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
    <View tachyons={['w-90']}>
      <View tachyons="mb3">
        <Text>RGB Display</Text>
        <ColorPickerBeauty
          color={colorState}
          colorPicker={rgbColor}
          colorDetails={
            <Text>
              rgba({rgbColor.r}, {rgbColor.g}, {rgbColor.b}, {rgbColor.a})
            </Text>
          }
          onChange={_onChangeColorPicker}
        />
      </View>
      <View tachyons="mb3">
        <Text>Hex Display</Text>
        <ColorPickerBeauty color={colorState} colorPicker={rgbColor} colorDetails={<Text>{colorPreview}</Text>} onChange={_onChangeColorPicker} />
      </View>
    </View>
  );
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);

  let borderColor, borderStyle, borderWidth, radiusBox, radiusPicker, selectType, selectStrategy, selectPlacement, backgroundInnerField;

  if (isLoading === false) {
    borderColor = select('Border Color', getOptions(defaultColors), 'gray5') as any;
    borderStyle = select(
      'Border Style',
      getOptions<ColorPickerBeautyProps['borderStyle'][]>(['dashed', 'dotted', 'solid']),
      'solid',
    ) as any;
    borderWidth = select(
      'Border Width',
      getOptions<ColorPickerBeautyProps['borderWidth'][]>(['0/6', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
      '1/6',
    ) as any;
    radiusBox = number('Radius Field Box', 8);
    radiusPicker = number('Radius Picker', 8);
    selectType = select(
      'Color Picker Platform',
      getOptions<ColorPickerBeautyProps['pickerType'][]>(['chrome', 'photoshop', 'sketch']),
      'chrome',
    ) as any;

    selectStrategy = select(
      'Color Picker Strategy',
      getOptions<ColorPickerBeautyProps['strategy'][]>(['absolute', 'fixed']),
      'absolute',
    ) as any;

    selectPlacement = select(
      'Placement',
      getOptions<ColorPickerBeautyProps['placement'][]>([
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
    ) as any;

    backgroundInnerField = select('Background field box', getOptions(defaultColors), 'light') as any;
  }

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
    <View tachyons={['w-90']}>
      <View tachyons="mb3">
        <Text>RGB Display</Text>
        <ColorPickerBeauty
          color={colorState}
          colorPicker={rgbColor}
          strategy={selectStrategy}
          placement={selectPlacement}
          pickerType={selectType}
          radiusBox={radiusBox}
          radiusPicker={radiusPicker}
          backgroundInnerField={backgroundInnerField}
          borderColor={borderColor}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
          colorDetails={
            <Text>
              rgba({rgbColor.r}, {rgbColor.g}, {rgbColor.b}, {rgbColor.a})
            </Text>
          }
          onChange={_onChangeColorPicker}
        />
      </View>
      <View tachyons="mb3">
        <Text>Hex Display</Text>
        <ColorPickerBeauty
          color={colorState}
          colorPicker={rgbColor}
          strategy={selectStrategy}
          placement={selectPlacement}
          pickerType={selectType}
          radiusBox={radiusBox}
          radiusPicker={radiusPicker}
          backgroundInnerField={backgroundInnerField}
          borderColor={borderColor}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
          colorDetails={<Text>{colorPreview}</Text>}
          onChange={_onChangeColorPicker}
        />
      </View>
    </View>
  );
};
