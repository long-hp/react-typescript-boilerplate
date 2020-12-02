import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import { NumberInput, NumberInputProps } from 'components/NumberInput';
import { InputProps, TextInput } from 'components/TextInput';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import getWithStylesProps from 'stories/utils/getWithStylesProps';

export default {
  title: 'Components/Input',
  component: TextInput,
  subcomponents: { NumberInput },
};

export const InputText = () => {
  const disabled = boolean('Disabled', false);
  const size = select(
    'Size',
    getOptions<InputProps['sizeInput'][]>(['large', 'medium', 'small']),
    'medium',
  );
  const [value, setValue] = useState('');

  const _handleOnChange = (value: string) => {
    setValue(value);
    action('onChange');
  };
  return <TextInput {...getWithStylesProps()} value={value} onChangeText={_handleOnChange} disabled={disabled} sizeInput={size} />;
};

export const InputNumber = () => {
  const initNumber = 0;
  const disabled = boolean('Disabled', false);
  const min = number('Min', initNumber);
  const max = number('Max', 10);
  const step = number('Step', 1);

  const size = select(
    'Size',
    getOptions<NumberInputProps['sizeInput'][]>(['large', 'medium', 'small']),
    'small',
  );

  const [value, setValue] = useState(initNumber);

  const _handleOnChange = (value: number) => {
    setValue(value);
    action('onChange');
  };

  return (
    <NumberInput
      {...getWithStylesProps()}
      value={value}
      onChangeNumber={_handleOnChange}
      disabled={disabled}
      inputProps={{ min: min, max: max, step: step }}
      sizeInput={size}
    />
  );
};
