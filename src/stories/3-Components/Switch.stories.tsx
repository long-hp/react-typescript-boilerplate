import React from 'react';
import { Size } from 'wiloke-react-core';
import { boolean, select } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import Switch from 'components/Switch';

export default {
  title: 'Fields/Switch',
  component: (Switch as any).type,
};

export const Default = () => {
  const size = select(
    'Size',
    getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
    'medium',
  );
  const checked = boolean('Checked', false);
  const loading = boolean('Loading', false);
  const disabled = boolean('Disabled', false);

  const _handleValueChange = (value: boolean) => {
    action('onValueChange')(value);
  };

  return <Switch onValueChange={_handleValueChange} size={size} checked={checked} loading={loading} disabled={disabled} />;
};
