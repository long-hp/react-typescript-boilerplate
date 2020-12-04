import { action } from '@storybook/addon-actions';
import { boolean, color, number, select } from '@storybook/addon-knobs';
import { NumberInput } from 'components/NumberInput';
import { Range as RangeSlide, RangeComponentProps, Slider as Slide, SliderProps } from 'components/RangeSlideBeauty';
import { RangeProps } from 'rc-slider/lib/Range';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import { Text, View } from 'wiloke-react-core';

export default {
  title: 'Components/Range',
  component: Slide,
  subcomponents: { RangeSlide },
};

export const Slider = () => {
  const dots = boolean('Dots', false);
  const disabled = boolean('Disabled', false);
  const reverse = boolean('Reverse', false);
  const tooltip = boolean('Tooltip', true);
  const tooltipVisible = boolean('Tooltip Visible', false);

  const min = number('Min', 0);
  const max = number('Max', 100);
  const step = number('Step', 10);

  const trackColor = color('Track Color', '#FD9B9B');
  const handleColor = color('Hanlde Color', '#4A90E2');
  const railColor = color('Rail Color', '#ccc');

  const tooltipPlacement = select(
    'Tooltip placement',
    getOptions<SliderProps['tooltipPlacement'][]>(['bottom', 'top']),
    'top',
  );

  const [value, setValue] = useState(0);

  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange');
  };

  return (
    <View tachyons="pa4" width={600}>
      <Text color="dark" tachyons="mb3">
        Slider value: <NumberInput value={value} onChangeNumber={_handleOnChange} inputProps={{ min: min, max: max, step: step }} />
      </Text>

      <Slide
        value={value}
        dots={dots}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        reverse={reverse}
        tooltip={tooltip}
        tooltipPlacement={tooltipPlacement}
        tooltipVisible={tooltipVisible}
        trackStyle={{ backgroundColor: `${trackColor}` }}
        handleStyle={{ backgroundColor: `${handleColor}` }}
        railStyle={{ backgroundColor: `${railColor}` }}
        onChange={_handleOnChange}
      />
    </View>
  );
};

export const Range = () => {
  const min = number('Min', 0);
  const max = number('Max', 100);
  const step = number('Step', 10);

  const dots = boolean('Dots', true);
  const tooltip = boolean('Tooltip', true);
  const tooltipVisible = boolean('Tooltip Visible', false);

  const trackColor1 = color('Track Color 1', '#FD9B9B');
  const trackColor2 = color('Track Color 2', '#6EA9FF');
  const handleColor1 = color('Handle Color 1', '#6EA9FF');
  const handleColor2 = color('Handle Color 2', '#9B59FF');
  const railColor = color('Rail Color', '#ccc');

  const tooltipPlacement = select(
    'Tooltip placement',
    getOptions<RangeComponentProps['tooltipPlacement'][]>(['bottom', 'top']),
    'top',
  );

  const [value, setValue] = useState<RangeProps['value']>([10, 30]);
  const convertValue = value?.join(', ');

  const _handleOnChange = (value: number[]) => {
    setValue(value);
  };

  // useEffect(() => {}, [tooltipVisible]);

  return (
    <View tachyons="pa4" width={600}>
      <Text color="dark" tachyons="mb3">
        Values of range slide: {convertValue}
      </Text>
      <RangeSlide
        value={value}
        min={min}
        max={max}
        step={step}
        dots={dots}
        tooltip={tooltip}
        tooltipPlacement={tooltipPlacement}
        tooltipVisible={tooltipVisible}
        trackStyle={[{ backgroundColor: `${trackColor1}` }, { backgroundColor: `${trackColor2}` }]}
        handleStyle={[{ backgroundColor: `${handleColor1}` }, { backgroundColor: `${handleColor2}` }]}
        railStyle={{ backgroundColor: `${railColor}` }}
        onChange={_handleOnChange}
      />
    </View>
  );
};
