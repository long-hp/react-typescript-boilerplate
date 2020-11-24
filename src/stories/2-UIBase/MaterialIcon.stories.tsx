import React, { useState } from 'react';
import materialIcon from 'stories/utils/materialIcon';
import { select, number, optionsKnob } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { View, defaultColors, MaterialIconName, GridSmart } from 'wiloke-react-core';
import MaterialIcon from './base/MaterialIcon';

export default {
  title: 'UI Base/MaterialIcon',
  component: MaterialIcon,
};

export const Default = () => {
  const [searchValue, setSearchValue] = useState('');
  const size = number('Size', 30, { range: true, min: 5, max: 50 });
  const color = select('Color', getOptions(defaultColors), 'dark2');
  const type = optionsKnob('Type', getOptions(['filled', 'outlined']), 'filled', { display: 'inline-radio' });

  const _renderIconText = (iconName: MaterialIconName) => {
    return (
      <View style={{ textAlign: 'center' }}>
        <MaterialIcon style={{ marginBottom: 8 }} name={iconName} size={size} color={color} type={type} />
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
      <GridSmart columnWidth={200} columnGap={30} columnRuleWidth={1} columnRuleColor="primary">
        {!!searchValue
          ? materialIcon.filter(name => name.includes(searchValue.toLowerCase())).map(_renderIconText)
          : materialIcon.map(_renderIconText)}
      </GridSmart>
    </View>
  );
};
