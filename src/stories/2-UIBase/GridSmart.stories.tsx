import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import { range } from 'ramda';
import getOptions from 'stories/utils/getOptions';
import { BorderStyle, View, defaultColors } from 'wiloke-react-core';
import GridSmart from './base/GridSmart';

export default {
  title: 'UI Base/GridSmart',
  component: GridSmart,
};

export const Default = () => {
  const quanityItems = number('Quanity Items', 4, { range: true, min: 1, max: 20 });
  const columnWidth = number('Column Width', 200, { range: true, min: 0, max: window.innerWidth });
  const columnGap = number('Column Gap', 15, { range: true, min: 0, max: window.innerWidth });
  const columnCount = number('Column Count', 0, { range: true, min: 0, max: 10 });
  const columnRuleColor = select('Column Rule Color', getOptions(defaultColors), 'primary');
  const columnRuleStyle = select('Column Rule Style', getOptions(['solid', 'dotted', 'dashed'] as BorderStyle[]), 'solid');
  const columnRuleWidth = number('Column Rule Width', 0, { range: true, min: 0, max: 10 });
  return (
    <GridSmart
      columnWidth={columnWidth}
      columnGap={columnGap}
      columnCount={columnCount}
      columnRuleColor={columnRuleColor}
      columnRuleStyle={columnRuleStyle}
      columnRuleWidth={columnRuleWidth}
    >
      {range(0, quanityItems).map((_, index) => (
        <View key={String(index)} tachyons="pa5" backgroundColor="pinterest" color="light">
          Box {index + 1}
        </View>
      ))}
    </GridSmart>
  );
};
