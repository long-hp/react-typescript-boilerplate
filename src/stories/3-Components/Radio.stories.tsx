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

export const WithProps = () => {
  const size = select(
    'Size',
    getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
    'medium',
  );
  const checked = boolean('Checked', false);
  const disabled = boolean('Disabled', false);
  const activeColor = select<ColorNames>('Color Active', getOptions(defaultColors), 'primary');
  const textActiveColor = select<ColorNames>('Color Text Active', getOptions(defaultColors), 'light');
  const block = boolean('Block Radio Button', false);

  const [valueState, setValueState] = useState('');

  const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    action('onChange')(event);
  };

  const _handleChangeValue = (value: string) => {
    action('onChange')(value);
  };

  return (
    <>
      {' '}
      <Radio
        value={1}
        checked={checked}
        activeColor={activeColor}
        size={size}
        onChange={_handleChange}
        onChangeValue={_handleChangeValue}
        disabled={disabled}
      >
        Day la radio default
      </Radio>
      <Radio.Group
        block={block}
        value={valueState}
        activeColor={activeColor}
        textActiveColor={textActiveColor}
        size={size}
        disabled={disabled}
        defaultValue={3}
        onChange={_handleChange}
        onChangeValue={_handleChangeValue}
      >
        <Radio.Button value={1}>Hello1</Radio.Button>
        <Radio.Button value={2}>Hello2</Radio.Button>
        <Radio.Button disabled value={3}>
          Hello3
        </Radio.Button>
      </Radio.Group>
      <Radio.Group
        size={size}
        disabled={disabled}
        activeColor={activeColor}
        value={valueState}
        onChange={_handleChange}
        onChangeValue={_handleChangeValue}
      >
        <Radio value="value1">Value1</Radio>
        <Radio value="value2">Value2</Radio>
        <Radio value="value3">Value3</Radio>
      </Radio.Group>
      <Radio.Group
        size={size}
        activeColor={activeColor}
        value={valueState}
        onChange={_handleChange}
        onChangeValue={_handleChangeValue}
        options={optionsWithDisabled}
      ></Radio.Group>
    </>
  );
};
