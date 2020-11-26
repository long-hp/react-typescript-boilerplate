import React, { useState } from 'react';
import materialIcon from 'stories/utils/materialIcon';
import { select, number, optionsKnob } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { View, defaultColors, MaterialIconName, GridSmart, Text } from 'wiloke-react-core';
import { range } from 'ramda';
import MaterialIcon from './base/MaterialIcon';

export default {
  title: 'UI Base/MaterialIcon',
  component: MaterialIcon,
};

export const Default = () => {
  const [searchValue, setSearchValue] = useState('');
  const [icons, setIcons] = useState(range(0, 80));
  const size = number('Size', 30, { range: true, min: 5, max: 50 });
  const color = select('Color', getOptions(defaultColors), 'gray8');
  const type = optionsKnob('Type', getOptions(['filled', 'outlined']), 'filled', { display: 'inline-radio' });

  const _renderIconText = (iconName: MaterialIconName, index: number) => {
    if (!icons.includes(index)) {
      return null;
    }
    return (
      <View style={{ textAlign: 'center' }}>
        <MaterialIcon style={{ marginBottom: 8 }} name={iconName} size={size} color={color} type={type} />
        <Text>{iconName}</Text>
      </View>
    );
  };

  return (
    <View container>
      <Text tagName="label" style={{ marginBottom: 30, display: 'flex', alignItems: 'center' }}>
        <Text>Search Icon: </Text>
        <input
          type="input"
          onFocus={() => {
            if (icons.length <= 80) {
              setIcons(range(0, materialIcon.length));
            }
          }}
          onChange={e => setSearchValue(e.target.value)}
        />
      </Text>
      <GridSmart columnWidth={200}>
        {!!searchValue
          ? materialIcon.filter(name => name.includes(searchValue.toLowerCase())).map(_renderIconText)
          : materialIcon.map(_renderIconText)}
      </GridSmart>
      {icons.length <= 80 && (
        <View tachyons={['tc', 'mt4']}>
          <button onClick={() => setIcons(range(0, materialIcon.length))}>View All Icons</button>
        </View>
      )}
    </View>
  );
};
