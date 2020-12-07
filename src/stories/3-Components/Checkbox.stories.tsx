import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Size } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const WithProps = () => {
  const size = select(
    'Size',
    getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
    'medium',
  );
  const isLoading = boolean('Loading', false);
  const checked = boolean('Checked', false);
  const disabled = boolean('Disabled', false);
  const [checkedState, setCheckedState] = useState(checked);

  const _handleChange = () => {
    setCheckedState(!checkedState);
    action('onChange');
  };

  return isLoading ? (
    <Checkbox.Loading />
  ) : (
    <Checkbox disabled={disabled} size={size} checked={checked} onChange={_handleChange}>
      {text('Children', 'Day la checkbox')}
    </Checkbox>
  );
};
