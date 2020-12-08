import { action } from '@storybook/addon-actions';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import Button from 'components/Button';
import RangeBeauty, { RangeBeautyProps } from 'components/RangeBeauty';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import { defaultColors, View } from 'wiloke-react-core';

export default {
  title: 'Components/RangeBeauty',
  component: RangeBeauty,
};

export const Default = () => {
  const [lowerBound, setLowerBound] = useState(10);
  const [upperBound, setUpperBound] = useState(30);
  const [value, setValue] = useState([lowerBound, upperBound]);

  const _handleChangeValue = (value: number[]) => {
    setValue(value);
    action('onChange')(value);
  };

  const _handleChangeLowerBound = (value: number) => {
    setLowerBound(value);
    action('onChangeLowerBound')(value);
  };

  const _handleChangeUpperBound = (value: number) => {
    setUpperBound(value);
    action('onChangeUpperBound')(value);
  };

  const _handleApplyBounds = () => {
    setValue([lowerBound, upperBound]);
    action('onClick');
  };

  return (
    <View container tachyons="pt4">
      <RangeBeauty
        min={0}
        max={100}
        step={10}
        value={value}
        lowerBound={lowerBound}
        upperBound={upperBound}
        tooltip
        onChangeNumber={_handleChangeValue}
        onChangeLowerBound={_handleChangeLowerBound}
        onChangeUpperBound={_handleChangeUpperBound}
      />
      <Button size="small" onClick={_handleApplyBounds}>
        Find the distance
      </Button>
    </View>
  );
};

export const WithProps = () => {
  const [lowerBound, setLowerBound] = useState(10);
  const [upperBound, setUpperBound] = useState(30);
  const [value, setValue] = useState([lowerBound, upperBound]);

  const isLoading = boolean('Loading', false);
  let min: number,
    max: number,
    step: number,
    tooltip: boolean,
    backgroundInnerField: string,
    borderColor: string,
    radius: number,
    borderStyle: string,
    borderWidth: string,
    label: string,
    note: string,
    trackColor1: string,
    handleColor1: string,
    handleColor2: string,
    railColor: string;

  if (isLoading === false) {
    min = number('Min', 10);
    max = number('Max', 100);
    step = number('Step', 10);
    label = text('Label', 'Two distances');
    note = text('Note', '*note');
    tooltip = boolean('Tooltip', false);
    backgroundInnerField = select('Background Color', getOptions(defaultColors), 'gray3') as any;
    borderColor = select('Border Color', getOptions(defaultColors), 'gray5') as any;
    borderStyle = select(
      'Border Style',
      getOptions<RangeBeautyProps['borderStyle'][]>(['dashed', 'dotted', 'solid']),
      'solid',
    ) as any;
    borderWidth = select(
      'Border Width',
      getOptions<RangeBeautyProps['borderWidth'][]>(['0/6', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
      '1/6',
    ) as any;
    radius = number('Radius', 8);
    trackColor1 = color('Track Color', '#FD9B9B');
    handleColor1 = color('Handle Color 1', '#6EA9FF');
    handleColor2 = color('Handle Color 2', '#9B59FF');
    railColor = color('Rail Color', '#ccc');
  }

  const _handleChangeValue = (value: number[]) => {
    setValue(value);
    action('onChange')(value);
  };

  const _handleChangeLowerBound = (value: number) => {
    setLowerBound(value);
    action('onChangeLowerBound')(value);
  };

  const _handleChangeUpperBound = (value: number) => {
    setUpperBound(value);
    action('onChangeUpperBound')(value);
  };

  const _handleApplyBounds = () => {
    setValue([lowerBound, upperBound]);
    action('onClick');
  };

  const _renderRange = () => {
    return isLoading ? (
      <RangeBeauty.Loading />
    ) : (
      <RangeBeauty
        value={value}
        lowerBound={lowerBound}
        upperBound={upperBound}
        label={label}
        note={note}
        min={min}
        max={max}
        step={step}
        tooltip={tooltip}
        backgroundInnerField={backgroundInnerField as any}
        borderColor={borderColor as any}
        borderStyle={borderStyle as any}
        borderWidth={borderWidth as any}
        radius={radius}
        trackStyle={[{ backgroundColor: `${trackColor1}` }]}
        handleStyle={[{ backgroundColor: `${handleColor1}` }, { backgroundColor: `${handleColor2}` }]}
        railStyle={{ backgroundColor: `${railColor}` }}
        onChangeNumber={_handleChangeValue}
        onChangeLowerBound={_handleChangeLowerBound}
        onChangeUpperBound={_handleChangeUpperBound}
      />
    );
  };

  return (
    <View container>
      <View tachyons="pa4">
        {_renderRange()}
        {!isLoading && (
          <Button size="small" onClick={_handleApplyBounds}>
            Find the distance
          </Button>
        )}
      </View>
    </View>
  );
};
