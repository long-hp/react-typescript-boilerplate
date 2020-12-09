import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, select, text } from '@storybook/addon-knobs';
import SlideBeauty from 'components/SliderBeauty';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import { BorderStyle, BorderWidth, ColorNames, defaultColors, Radius } from 'wiloke-react-core';

export default {
  title: 'Components/SliderBeauty',
  component: SlideBeauty,
};

export const Default = () => {
  const [value, setValue] = useState(0);

  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange')(value);
  };

  return (
    <SlideBeauty
      label="Number of columns"
      note="You’ve read about the importance of being courageous, rebellious and imaginative.    "
      value={value}
      borderStyle="solid"
      borderWidth="1/6"
      onChangeNumber={_handleOnChange}
    />
  );
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let label = 'Label',
    note = '*Note',
    borderColor: ColorNames = 'gray5',
    backgroundColor: ColorNames = 'gray3',
    min = 0,
    max = 100,
    step = 1,
    borderStyle: BorderStyle = 'solid',
    borderWidth: BorderWidth = '1/6',
    borderInputColor: ColorNames = 'gray5',
    borderInputStyle: BorderStyle = 'solid';

  const radiusInputType = optionsKnob<'css style' | 'number'>('Radius Picker Type', getOptions(['css style', 'number']), 'number', {
    display: 'inline-radio',
  });

  const radiusInput =
    radiusInputType === 'css style'
      ? select<Radius>(
          'Radius Picker',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius Input', 8, { range: true, min: 0, max: 100 });

  const radiusType = optionsKnob<'css style' | 'number'>('Radius Input Type', getOptions(['css style', 'number']), 'number', {
    display: 'inline-radio',
  });

  const radius =
    radiusType === 'css style'
      ? select<Radius>(
          'Radius Box',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius Box', 8, { range: true, min: 0, max: 100 });

  if (isLoading === false) {
    min = number('Min', 0);
    max = number('Max', 100);
    step = number('Step', 1);
    label = text('Label', 'Label');
    note = text('Note', '*note');
    backgroundColor = select<ColorNames>('Background Color', getOptions(defaultColors), 'gray3');

    borderColor = select<ColorNames>('Border Color', getOptions(defaultColors), 'gray5');
    borderInputColor = select<ColorNames>('Border Input Color', getOptions(defaultColors), 'gray5');

    borderStyle = select<BorderStyle>(
      'Border Style',
      getOptions<BorderStyle[]>(['dashed', 'dotted', 'solid']),
      'solid',
    );
    borderInputStyle = select<BorderStyle>(
      'Border Input Style',
      getOptions<BorderStyle[]>(['dashed', 'dotted', 'solid']),
      'solid',
    );
    borderWidth = select<BorderWidth>(
      'Border Width',
      getOptions<BorderWidth[]>(['0/6', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
      '1/6',
    );
  }

  const [value, setValue] = useState(0);

  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange')(value);
  };

  return isLoading ? (
    <SlideBeauty.Loading />
  ) : (
    <SlideBeauty
      value={value}
      label={label}
      note={note}
      backgroundInnerField={backgroundColor}
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      borderInputColor={borderInputColor}
      borderInputStyle={borderInputStyle}
      radius={radius}
      radiusInput={radiusInput}
      min={min}
      max={max}
      step={step}
      onChangeNumber={_handleOnChange}
    />
  );
};
