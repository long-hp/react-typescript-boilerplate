import React from 'react';
import { text, number, color, select } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { View, defaultColors } from 'wiloke-react-core';
import TextUnderline from 'components/TextUnderline';

export default {
  title: 'Components/TextUnderline',
  component: TextUnderline,
};

export const Default = () => {
  const size = number('Size', 60, { range: true, min: 20, max: 100 });
  const lineSize = number('Line Size', 20, { range: true, min: 20, max: 100 });
  const lineBottomSpace = number('Line Bottom Space', 40, { range: true, min: 20, max: 100 });
  const lineColor = color('Line Color', '#94fbd1');
  const colorProps = select('Color', getOptions(defaultColors), 'gray8');
  const children = text('Children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit');
  return (
    <View>
      <TextUnderline size={size} lineSize={lineSize} lineBottomSpace={lineBottomSpace} lineColor={lineColor} color={colorProps}>
        {children}
      </TextUnderline>
    </View>
  );
};
