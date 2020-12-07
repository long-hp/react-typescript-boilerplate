import React, { useState } from 'react';
import RangeBase, { RangeBaseProps } from 'components/RangeBase';
import { boolean, color, number, select } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { RangeProps } from 'rc-slider/lib/Range';
import { Text, View } from 'wiloke-react-core';

export default {
  title: 'Components/RangeBase',
  component: RangeBase,
};

export const Default = () => {
  const [value, setValue] = useState<RangeProps['value']>([10, 30]);

  const _handleOnChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <RangeBase
      value={value}
      min={0}
      max={100}
      step={10}
      dots
      tooltip
      tooltipPlacement="top"
      tooltipVisible
      trackStyle={[{ backgroundColor: `#475BE2` }, { backgroundColor: `#475BE2` }]}
      handleStyle={[
        { backgroundColor: `#fff`, border: '1px solid #ccc' },
        { backgroundColor: `#fff`, border: '1px solid #ccc' },
      ]}
      railStyle={{ backgroundColor: `#DBDBE0` }}
      onChange={_handleOnChange}
    />
  );
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let min, max, step, dots, tooltip, tooltipVisible, trackColor1, trackColor2, handleColor1, handleColor2, railColor, tooltipPlacement;

  if (isLoading === false) {
    min = number('Min', 0);
    max = number('Max', 100);
    step = number('Step', 10);

    dots = boolean('Dots', true);
    tooltip = boolean('Tooltip', true);
    tooltipVisible = boolean('Tooltip Visible', false);

    trackColor1 = color('Track Color 1', '#FD9B9B');
    trackColor2 = color('Track Color 2', '#6EA9FF');
    handleColor1 = color('Handle Color 1', '#6EA9FF');
    handleColor2 = color('Handle Color 2', '#9B59FF');
    railColor = color('Rail Color', '#ccc');

    tooltipPlacement = select(
      'Tooltip placement',
      getOptions<RangeBaseProps['tooltipPlacement'][]>(['bottom', 'top']),
      'top',
    ) as any;
  }

  const [value, setValue] = useState<RangeProps['value']>([10, 30]);
  const convertValue = value?.join(', ');

  const _handleOnChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <View tachyons="pa4" width={600}>
      <Text color="dark" tachyons="mb3">
        Values of range slide: {convertValue}
      </Text>
      {isLoading ? (
        <RangeBase.Loading />
      ) : (
        <RangeBase
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
      )}
    </View>
  );
};
