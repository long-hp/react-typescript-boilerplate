import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import Slider from 'components/Slider';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import { ColorNames, defaultColors, View } from 'wiloke-react-core';

export default {
  title: 'Components/Slider',
  component: Slider,
};

export const Default = () => {
  const [value, setValue] = useState(0);
  const MIN = 0;
  const MAX = 100;
  const STEP = 1;

  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange')(value);
  };

  return (
    <View tachyons="pa4" width={600}>
      <Slider value={value} min={MIN} max={MAX} step={STEP} onChange={_handleOnChange} />
    </View>
  );
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let trackColor: ColorNames = 'primary',
    handleColor: ColorNames = 'light',
    handleBorderColor: ColorNames = 'gray4',
    railColor: ColorNames = 'gray5',
    min,
    max,
    step;

  if (isLoading === false) {
    min = number('Min', 0);
    max = number('Max', 100);
    step = number('Step', 1);

    trackColor = select<ColorNames>('Track Color', getOptions(defaultColors), 'primary');
    handleColor = select<ColorNames>('Hanlder Color', getOptions(defaultColors), 'light');
    handleBorderColor = select<ColorNames>('Hanlder Border Color', getOptions(defaultColors), 'gray4');
    railColor = select<ColorNames>('Rail Color', getOptions(defaultColors), 'gray5');
  }

  const [value, setValue] = useState(0);
  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange')(value);
  };

  return (
    <View tachyons="pa4" width={600}>
      {isLoading ? (
        <Slider.Loading />
      ) : (
        <Slider
          value={value}
          min={min}
          max={max}
          step={step}
          trackColor={trackColor}
          railColor={railColor}
          handleColor={handleColor}
          handleBorderColor={handleBorderColor}
          onChange={_handleOnChange}
        />
      )}
    </View>
  );
};
