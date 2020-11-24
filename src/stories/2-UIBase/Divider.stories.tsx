import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import { View, defaultColors } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import Divider from './base/Divider';

export default {
  title: 'UI Base/Divider',
  component: Divider,
};

export const Default = () => {
  const size = number('Size', 30, { range: true, min: 0, max: 1000 });
  const color = select('Color', getOptions(defaultColors), 'gray2');
  return (
    <View>
      <View>Box 1</View>
      <Divider size={size} color={color} />
      <View>Box 2</View>
    </View>
  );
};
