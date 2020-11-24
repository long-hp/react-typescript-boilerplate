import React, { useState } from 'react';
import lineAwesome from 'stories/utils/lineAwesome';
import { select, number } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { View, defaultColors, LineAwesomeName, GridSmart } from 'wiloke-react-core';
import LineAwesome from './base/LineAwesome';

export default {
  title: 'UI Base/LineAwesome',
  component: LineAwesome,
};

export const Default = () => {
  const [searchValue, setSearchValue] = useState('');
  const size = number('Size', 30, { range: true, min: 5, max: 50 });
  const color = select('Color', getOptions(defaultColors), 'dark2');

  const _renderIconText = (iconName: LineAwesomeName) => {
    return (
      <View style={{ textAlign: 'center' }}>
        <LineAwesome style={{ marginBottom: 8 }} name={iconName} size={size} color={color} />
        <View>{iconName}</View>
      </View>
    );
  };

  return (
    <View container>
      <label style={{ marginBottom: 30, display: 'flex', alignItems: 'center' }}>
        <div>Search Icon: </div>
        <input type="input" onChange={e => setSearchValue(e.target.value)} />
      </label>
      <GridSmart columnWidth={150} columnGap={30} columnRuleWidth={1} columnRuleColor="primary">
        {!!searchValue ? lineAwesome.filter(name => name.includes(searchValue.toLowerCase())).map(_renderIconText) : lineAwesome.map(_renderIconText)}
      </GridSmart>
    </View>
  );
};
