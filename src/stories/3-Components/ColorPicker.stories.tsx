import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, select } from '@storybook/addon-knobs';
import ColorPicker, { ColorPickerProps } from 'components/ColorPicker';
import React from 'react';
import getOptions from 'stories/utils/getOptions';
import { Radius, View } from 'wiloke-react-core';

export default {
  title: 'Fields/ColorPicker',
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
          getOptions<Radius[]>(['pill', 'square']),
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

  return (
    <View tachyons={['flex', 'justify-between', 'w-100', 'pa4']}>
      {isLoading ? (
        <ColorPicker.Loading />
      ) : (
        <ColorPicker
          pickerType={selectType}
          placement={selectPlacement}
          radius={radius}
          onlyShowColorBoard={onlyShowColorBoard}
          onChange={action('onChange')}
        />
      )}
    </View>
  );
};
