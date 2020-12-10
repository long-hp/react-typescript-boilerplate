import { action } from '@storybook/addon-actions';
import { boolean, number, optionsKnob, select } from '@storybook/addon-knobs';
import { NumberInput, NumberInputProps } from 'components/NumberInput';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import getWithStylesProps from 'stories/utils/getWithStylesProps';
import { Radius } from 'wiloke-react-core';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
};

export const WithProps = () => {
  const isLoading = boolean('Loading Input', false);
  const block = boolean('Block', false);
  const initNumber = 0;
  let disabled: boolean, min: number, max: number, step: number, size: string;

  const radiusType = optionsKnob<'css style' | 'number'>('Radius Type', getOptions(['css style', 'number']), 'number', {
    display: 'inline-radio',
  });

  const radius =
    radiusType === 'css style'
      ? select<Radius>(
          'Radius',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius', 5, { range: true, min: 0, max: 100 });

  if (isLoading === false) {
    disabled = boolean('Disabled', false);
    min = number('Min', initNumber);
    max = number('Max', 10);
    step = number('Step', 1);

    size = select(
      'Size',
      getOptions<NumberInputProps['sizeInput'][]>(['large', 'medium', 'small']),
      'small',
    );
  }

  const [value, setValue] = useState(initNumber);

  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange')(value);
  };

  const _renderNumberInput = () => {
    return isLoading ? (
      <NumberInput.Loading />
    ) : (
      <NumberInput
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        sizeInput={size as any}
        radius={radius}
        borderColor="gray5"
        borderWidth="1/6"
        block={block}
        onValueChange={_handleOnChange}
      />
    );
  };

  return _renderNumberInput();
};

export const WithStyles = () => {
  return <NumberInput {...getWithStylesProps()} value={0} min={1} max={10} step={1} sizeInput="small" />;
};
