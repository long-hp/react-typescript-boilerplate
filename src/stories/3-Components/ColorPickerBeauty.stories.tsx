import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, select } from '@storybook/addon-knobs';
import { Placement } from 'components/ColorPicker/ColorPicker';
import ColorPickerBeauty, { ColorPickerBeautyProps } from 'components/ColorPickerBeauty';
import React, { useState } from 'react';
import { ColorResult, HSLColor, RGBColor } from 'react-color';
import getOptions from 'stories/utils/getOptions';
import { BorderStyle, BorderWidth, ColorNames, defaultColors, Radius, Text, View } from 'wiloke-react-core';

export default {
  title: 'Components/ColorPickerBeauty',
  component: ColorPickerBeauty,
};

export const Default = () => {
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
    action('onChange')(color);
  };

  return (
    <View tachyons={['w-90']}>
      <View tachyons="mb3">
        <ColorPickerBeauty
          color={colorState}
          colorPicker={rgbColor}
          pickerType="sketch"
          colorDetails={
            <Text>
              rgba({rgbColor.r}, {rgbColor.g}, {rgbColor.b}, {rgbColor.a})
            </Text>
          }
          onChange={_onChangeColorPicker}
        />
      </View>
    </View>
  );
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);

  let borderColor: ColorNames = 'gray5',
    borderStyle: BorderStyle = 'solid',
    borderWidth: BorderWidth = '1/6',
    selectType: ColorPickerBeautyProps['pickerType'] = 'sketch',
    selectPlacement: Placement = 'bottom-start',
    backgroundInnerField: ColorNames = 'gray5';

  const radiusPikerType = optionsKnob<'css style' | 'number'>('Radius Picker Type', getOptions(['css style', 'number']), 'number', {
    display: 'inline-radio',
  });

  const radiusPicker =
    radiusPikerType === 'css style'
      ? select<Radius>(
          'Radius Picker',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius Picker', 5, { range: true, min: 0, max: 100 });

  const radiusType = optionsKnob<'css style' | 'number'>('Radius Box Type', getOptions(['css style', 'number']), 'number', {
    display: 'inline-radio',
  });

  const radiusBox =
    radiusType === 'css style'
      ? select<Radius>(
          'Radius Box',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius Box', 5, { range: true, min: 0, max: 100 });

  if (isLoading === false) {
    borderColor = select('Border Color', getOptions(defaultColors), 'gray5');

    borderStyle = select(
      'Border Style',
      getOptions<ColorPickerBeautyProps['borderStyle'][]>(['dashed', 'dotted', 'solid']),
      'solid',
    );

    borderWidth = select(
      'Border Width',
      getOptions<ColorPickerBeautyProps['borderWidth'][]>(['0/6', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
      '1/6',
    );

    selectType = select(
      'Color Picker Platform',
      getOptions<ColorPickerBeautyProps['pickerType'][]>(['chrome', 'photoshop', 'sketch']),
      'sketch',
    );

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
    );

    backgroundInnerField = select('Background field box', getOptions(defaultColors), 'light');
  }

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
    if (color.hsl !== colorState) {
      setRgbColor(color.rgb);
      setColorState(color.hsl);
      action('onChange')(color);
    }
  };

  return (
    <View tachyons={['w-90']}>
      <View tachyons="mb3">
        {isLoading ? (
          <ColorPickerBeauty.Loading />
        ) : (
          <ColorPickerBeauty
            color={colorState}
            colorPicker={rgbColor}
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
        )}
      </View>
    </View>
  );
};
