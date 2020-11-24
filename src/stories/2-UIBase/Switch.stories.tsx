import React, { useState } from 'react';
import { Size } from 'wiloke-react-core';
import { boolean, select } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import Switch from './base/Switch';

export default {
  title: 'UI Base/Switch',
  component: Switch,
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

  const [checkedState, setChecked] = useState(checked);

  const _handleClick = () => {
    setChecked(!checkedState);
    action('onChange');
  };

  return <Switch onChange={_handleClick} size={size} checked={checkedState} loading={loading} disabled={disabled} />;
};
