import { action } from '@storybook/addon-actions';
import { boolean, color, number } from '@storybook/addon-knobs';
import SliderBase from 'components/SlideBase';
import React, { useState } from 'react';
import { View } from 'wiloke-react-core';
export default {
  title: 'Components/SlideBase',
  component: SliderBase,
};

export const Default = () => {
  const [value, setValue] = useState(0);
  const MIN = 0;
  const MAX = 10;
  const STEP = 1;
  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange')(value);
  };

  return (
    <View tachyons="pa4" width={600}>
      <SliderBase
        value={value}
        min={MIN}
        max={MAX}
        step={STEP}
        trackStyle={{ backgroundColor: `#475BE2` }}
        handleStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
        railStyle={{ backgroundColor: `#DBDBE0` }}
        onChange={_handleOnChange}
      />
    </View>
  );
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let trackStyle, handleStyle, handleBorder, railStyle, min, max, step;

  if (isLoading === false) {
    trackStyle = color('Track background', '#475BE2');
    handleStyle = color('Handle background', '#fff');
    handleBorder = color('Handle border color', '#ccc');
    railStyle = color('Rail background', '#DBDBE0');
    min = number('Min', 0);
    max = number('Max', 10);
    step = number('Step', 1);
  }

  const [value, setValue] = useState(0);
  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange')(value);
  };

  return (
    <View tachyons="pa4" width={600}>
      {isLoading ? (
        <SliderBase.Loading />
      ) : (
        <SliderBase
          value={value}
          min={min}
          max={max}
          step={step}
          trackStyle={{ backgroundColor: `${trackStyle}` }}
          handleStyle={{ backgroundColor: `${handleStyle}`, border: `1px solid ${handleBorder}` }}
          railStyle={{ backgroundColor: `${railStyle}` }}
          onChange={_handleOnChange}
        />
      )}
    </View>
  );
};
