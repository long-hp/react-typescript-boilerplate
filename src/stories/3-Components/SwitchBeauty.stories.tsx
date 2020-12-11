import React from 'react';
import SwitchBeauty from 'components/SwitchBeauty';
import getWithStylesProps from 'stories/utils/getWithStylesProps';
import getOptions from 'stories/utils/getOptions';
import { ColorNames, defaultColors, Size } from 'wiloke-react-core';
import { boolean, number, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/SwitchBeauty',
  component: SwitchBeauty,
};

const getRadioDefaultProps = () => ({
  size: select(
    'Size',
    getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
    'medium',
  ),
  checked: boolean('Checked', false),
  disabled: boolean('Disabled', false),
  fontSize: number('Font Size', undefined as any),
  disableText: text('Disable Text', 'Disabled'),
  enableText: text('Enable Text', 'Enable'),
  loading: boolean('Loading', false),
  enableColor: select<ColorNames>('Enable Color', getOptions(defaultColors), 'success'),
  disableColor: select<ColorNames>('Disable Color', getOptions(defaultColors), 'gray7'),
});

export const WithProps = () => {
  return <SwitchBeauty {...getRadioDefaultProps()} />;
};

export const WithStyles = () => {
  return <SwitchBeauty {...getWithStylesProps()} />;
};
