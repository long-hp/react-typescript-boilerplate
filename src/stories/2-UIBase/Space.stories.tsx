import React from 'react';
import { View } from 'wiloke-react-core';
import { number, optionsKnob } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import Space from './base/Space';

export default {
  title: 'UI Base/Space',
  component: Space,
};

export const Default = () => {
  const size = number('Size', 30, { range: true, min: 0, max: 1000 });
  const type = optionsKnob(
    'Type',
    getOptions<('horizontal' | 'vertical')[]>(['horizontal', 'vertical']),
    'horizontal',
    {
      display: 'inline-radio',
    },
  );
  return (
    <View>
      <View color="dark1" style={type === 'horizontal' ? { display: 'inline-block' } : {}}>
        Box 1
      </View>
      <Space size={size} type={type} />
      <View color="dark1" style={type === 'horizontal' ? { display: 'inline-block' } : {}}>
        Box 2
      </View>
    </View>
  );
};
