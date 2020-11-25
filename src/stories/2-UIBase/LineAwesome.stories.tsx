import React, { useState } from 'react';
import lineAwesome from 'stories/utils/lineAwesome';
import { select, number } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { View, defaultColors, LineAwesomeName, GridSmart, Text, Button } from 'wiloke-react-core';
import { range } from 'ramda';
import LineAwesome from './base/LineAwesome';

export default {
  title: 'UI Base/LineAwesome',
  component: LineAwesome,
};

export const Default = () => {
  const [searchValue, setSearchValue] = useState('');
  const [icons, setIcons] = useState(range(0, 80));
  const size = number('Size', 30, { range: true, min: 5, max: 50 });
  const color = select('Color', getOptions(defaultColors), 'dark2');

  const _renderIconText = (iconName: LineAwesomeName, index: number) => {
    if (!icons.includes(index)) {
      return null;
    }
    return (
      <View style={{ textAlign: 'center' }}>
        <LineAwesome style={{ marginBottom: 8 }} name={iconName} size={size} color={color} />
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
              setIcons(range(0, lineAwesome.length));
            }
          }}
          onChange={e => setSearchValue(e.target.value)}
        />
      </Text>
      <GridSmart columnWidth={150}>
        {!!searchValue ? lineAwesome.filter(name => name.includes(searchValue.toLowerCase())).map(_renderIconText) : lineAwesome.map(_renderIconText)}
      </GridSmart>
      {icons.length <= 80 && (
        <View tachyons={['tc', 'mt4']}>
          <Button radius="round" onClick={() => setIcons(range(0, lineAwesome.length))}>
            View All Icons
          </Button>
        </View>
      )}
    </View>
  );
};
