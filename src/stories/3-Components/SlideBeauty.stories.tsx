import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import SlideBeauty, { SlideBeautyProps } from 'components/SlideBeauty';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import { defaultColors } from 'wiloke-react-core';

export default {
  title: 'Components/SlideBeauty',
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
  let label, note, borderColor, radius, backgroundColor, min, max, step, borderStyle, borderWidth;

  if (isLoading === false) {
    min = number('Min', 0);
    max = number('Max', 10);
    step = number('Step', 1);
    label = text('Label', 'Label');
    note = text('Note', '*note');
    borderColor = select('Border Color', getOptions(defaultColors), 'gray5') as any;
    backgroundColor = select('Background Color', getOptions(defaultColors), 'gray3') as any;
    borderStyle = select(
      'Border Style',
      getOptions<SlideBeautyProps['borderStyle'][]>(['dashed', 'dotted', 'solid']),
      'solid',
    ) as any;
    borderWidth = select(
      'Border Width',
      getOptions<SlideBeautyProps['borderWidth'][]>(['0/6', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
      '1/6',
    ) as any;
    radius = number('Radius', 8);
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
      radius={radius}
      min={min}
      max={max}
      step={step}
      onChangeNumber={_handleOnChange}
    />
  );
};
