import React, { useState } from 'react';
import { defaultColors, Size } from 'wiloke-react-core';
import { boolean, select } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import Switch from 'components/Switch/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Default = () => {
  const size = select(
    'Size',
    getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
    'medium',
  );

  const activeBackground = select('Background color active', getOptions(defaultColors), 'primary');
  const inactiveBackground = select('Background color inactive', getOptions(defaultColors), 'gray4');

  const checked = boolean('Checked', false);
  const loading = boolean('Loading', false);
  const disabled = boolean('Disabled', false);

  const [checkedState, setChecked] = useState(checked);

  const _handleClick = () => {
    setChecked(!checkedState);
    action('onChange');
  };

  return (
    <Switch
      onChange={_handleClick}
      size={size}
      checked={checked}
      activeColor={activeBackground}
      inactiveColor={inactiveBackground}
      loading={loading}
      disabled={disabled}
    />
  );
};
