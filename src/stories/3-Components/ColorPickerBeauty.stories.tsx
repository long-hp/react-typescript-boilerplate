import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, select } from '@storybook/addon-knobs';
import { Placement } from 'components/ColorPicker/ColorPicker';
import ColorPickerBeauty, { ColorPickerBeautyProps } from 'components/ColorPickerBeauty';
import getOptions from 'stories/utils/getOptions';
import { BorderStyle, ColorNames, defaultColors, Radius, View } from 'wiloke-react-core';

export default {
  title: 'Fields/ColorPickerBeauty',
  component: ColorPickerBeauty,
};

export const Default = () => {
  return (
    <View>
      <View tachyons="mb3">
        <ColorPickerBeauty onChange={action('onChange')} />
      </View>
    </View>
  );
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);

  let borderColor: ColorNames = 'gray5',
    borderStyle: BorderStyle = 'solid',
    borderWidth = 1,
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
          getOptions<Radius[]>(['pill', 'square']),
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
          getOptions<Radius[]>(['pill', 'square']),
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

    borderWidth = number('Border Width', 1);

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

  return (
    <View>
      <View tachyons="mb3">
        {isLoading ? (
          <ColorPickerBeauty.Loading />
        ) : (
          <ColorPickerBeauty
            placement={selectPlacement}
            pickerType={selectType}
            radiusBox={radiusBox}
            radiusPicker={radiusPicker}
            backgroundInnerField={backgroundInnerField}
            borderColor={borderColor}
            borderStyle={borderStyle}
            borderWidth={borderWidth}
            onChange={action('onChange')}
          />
        )}
      </View>
    </View>
  );
};
