import React from 'react';
import getWithStylesProps from 'stories/utils/getWithStylesProps';
import { number, array } from '@storybook/addon-knobs';
import { Text } from 'wiloke-react-core';
import View from './base/View';

export default {
  title: 'UI Base/View',
  component: View,
};

export const WithStyles = () => {
  return (
    <View {...getWithStylesProps()}>
      <Text tagName="h3" tachyons="pa5">
        ReactNode
      </Text>
    </View>
  );
};

export const WithGrid = () => {
  const items = number('Items', 4, { range: true, min: 1, max: 20 });
  const columns = array('Columns ( max 12 )', ['12', '6', '4', '3'], '|').map(Number);
  return (
    <View container>
      <View row>
        {Array(items)
          .fill(null)
          .map((_, index) => (
            <View columns={columns}>
              <Text key={String(index)} tagName="h3" tachyons={['pa5', 'mb4']} backgroundColor="gray1">
                Item {index + 1}
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
};
