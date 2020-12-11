import React, { ChangeEvent, useState } from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { ColorNames, defaultColors, Size } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import Radio from 'components/Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const getRadioDefaultProps = () => ({
  size: select(
    'Size',
    getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
    'medium',
  ),
  checked: boolean('Checked', false),
  disabled: boolean('Disabled', false),
  activeColor: select<ColorNames>('Color Active', getOptions(defaultColors), 'primary'),
});

const getRadioButtonGroupProps = () => ({
  size: select(
    'Size',
    getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
    'medium',
  ),
  disabled: boolean('Disabled', false),
  activeColor: select<ColorNames>('Color Active', getOptions(defaultColors), 'primary'),
  textActiveColor: select<ColorNames>('Color Text Active', getOptions(defaultColors), 'light'),
  block: boolean('Block Radio Button', false),
  borderColor: select<ColorNames>('Boder Color', getOptions(defaultColors), 'gray5'),
});

export const WithRadioDefault = () => {
  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    action('onChange')(event);
  };

  const _handleChangeValue = (value: string) => {
    action('onChange')(value);
  };

  return (
    <Radio {...getRadioDefaultProps()} value={1} onChange={_handleChange} onChangeValue={_handleChangeValue}>
      Day la radio default
    </Radio>
  );
};

export const WithRadioButtonGroup = () => {
  const [valueState, setValueState] = useState('');

  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    action('onChange')(event);
  };

  const _handleChangeValue = (value: string) => {
    action('onChange')(value);
  };

  return (
    <Radio.Group {...getRadioButtonGroupProps()} value={valueState} defaultValue={3} onChange={_handleChange} onChangeValue={_handleChangeValue}>
      <Radio.Button value={1}>Hello1</Radio.Button>
      <Radio.Button value={2}>Hello2</Radio.Button>
      <Radio.Button disabled value={3}>
        Hello3
      </Radio.Button>
    </Radio.Group>
  );
};

export const WithRadioDefaultGroup = () => {
  const [valueState, setValueState] = useState('');

  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    action('onChange')(event);
  };

  const _handleChangeValue = (value: string) => {
    action('onChange')(value);
  };

  return (
    <Radio.Group {...getRadioDefaultProps()} value={valueState} onChange={_handleChange} onChangeValue={_handleChangeValue}>
      <Radio value="value1">Value1</Radio>
      <Radio value="value2">Value2</Radio>
      <Radio value="value3">Value3</Radio>
    </Radio.Group>
  );
};

export const WithoutChildGroup = () => {
  const [valueState, setValueState] = useState('');

  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    action('onChange')(event);
  };

  const _handleChangeValue = (value: string) => {
    action('onChange')(value);
  };

  return (
    <Radio.Group
      {...getRadioDefaultProps()}
      value={valueState}
      onChange={_handleChange}
      onChangeValue={_handleChangeValue}
      options={optionsWithDisabled}
    ></Radio.Group>
  );
};
