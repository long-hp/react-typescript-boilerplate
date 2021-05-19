import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import React from 'react';
import { Text, View } from 'wiloke-react-core';
import ViewportTracking from './base/ViewportTracking';

export default {
  title: 'UI Base/ViewportTracking',
  component: ViewportTracking,
};

export const WithProps = () => {
  const offsetTop = number('Offset Top', 0);
  const offsetBottom = number('Offset Bottom', 0);
  const numberOfRuns = number('Number Of Runs', Infinity);
  return (
    <View>
      <View css={{ height: '2000px' }}>
        <Text tagName="h3">Scroll xuống dưới</Text>
      </View>
      <ViewportTracking
        offsetTop={offsetTop}
        offsetBottom={offsetBottom}
        numberOfRuns={numberOfRuns}
        onEnterViewport={() => action('onClick')('Trong màn hình')}
        onLeaveViewport={() => action('onClick')('Ngoài màn hình')}
      >
        <View backgroundColor="secondary" css={{ height: '300px' }}>
          <Text tagName="h3">Viewport</Text>
        </View>
      </ViewportTracking>
      <View css={{ height: '3000px' }}></View>
    </View>
  );
};
