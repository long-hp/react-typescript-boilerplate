import React from 'react';
import { Text } from 'wiloke-react-core';
import { action } from '@storybook/addon-actions';
import OuterTrigger, { useOuterTrigger } from './base/OuterTrigger';

export default {
  title: 'UI Base/OuterTrigger',
  component: OuterTrigger,
};

export const WithComponent = () => {
  return (
    <OuterTrigger onClick={() => action('onClick')('Outer: true')}>
      <Text backgroundColor="primary" color="light" tachyons="pa4" size={20}>
        Click outer box
      </Text>
    </OuterTrigger>
  );
};

export const WithHooks = () => {
  const { setRef } = useOuterTrigger(() => action('onClick')('Outer: true'));
  return (
    <Text ref={setRef} backgroundColor="secondary" color="light" tachyons="pa4" size={20}>
      Click outer box
    </Text>
  );
};
