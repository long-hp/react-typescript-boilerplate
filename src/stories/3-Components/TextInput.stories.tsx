import React from 'react';
import TextInput, { TextInputProps } from 'components/TextInput';
import { boolean, select, text } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export const WithProps = () => {
  const size = select(
    'Size',
    getOptions<TextInputProps['size'][]>(['small', 'medium', 'large', 'extra-small']),
    'large',
  );
  const type = select(
    'Type',
    getOptions<TextInputProps['type'][]>(['email', 'text', 'password', 'number']),
    'text',
  );
  const disabled = boolean('Disabled', false);
  const block = boolean('Block', false);
  const bordered = boolean('Bordered', true);
  const placeholder = text('Placeholder', '');

  return (
    <TextInput
      type={type}
      size={size}
      placeholder={placeholder}
      disabled={disabled}
      block={block}
      bordered={bordered}
      onChange={action('onChange')}
    />
  );
};
