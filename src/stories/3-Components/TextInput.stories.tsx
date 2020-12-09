import React, { ChangeEvent, useState } from 'react';
import { InputProps, TextInput } from 'components/TextInput';
import { boolean, number, optionsKnob, select, text } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import getWithStylesProps from 'stories/utils/getWithStylesProps';
import { Radius } from 'wiloke-react-core';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export const WithProps = () => {
  const isLoading = boolean('Loading Input', false);
  let size, disabled, block, placeholder;
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
    size = select(
      'Size',
      getOptions<InputProps['sizeInput'][]>(['small', 'medium', 'large']),
      'large',
    ) as any;
    disabled = boolean('Disabled', false);
    block = boolean('Block', false);
    placeholder = text('Placeholder', 'Do something...');
  }

  const [value, setValue] = useState('');

  const _handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    action('onChange')(event.target.value);
  };

  return isLoading ? (
    <TextInput.Loading />
  ) : (
    <TextInput
      sizeInput={size}
      disabled={disabled}
      block={block}
      placeholder={placeholder}
      borderColor="gray5"
      borderStyle="solid"
      borderWidth="1/6"
      radius={radius}
      value={value}
      onChange={_handleOnChange}
    />
  );
};

export const WithStyles = () => {
  const _renderNumberInput = () => {
    return <TextInput {...getWithStylesProps()} sizeInput="large" placeholder="Do something..." />;
  };

  return _renderNumberInput();
};
