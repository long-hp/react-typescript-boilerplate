import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import Avatar from 'components/Avatar';
import { View, Text } from 'wiloke-react-core';

export default {
  title: 'General/Avatar',
  component: (Avatar as any).type,
};

export const Default = () => {
  const uri = text('Image Uri', '');
  const size = number('Size', 30, { range: true, min: 10, max: 100 });
  const name = text('Name', 'Wiloke');

  return (
    <View>
      <Text wilokeStyles="mb-4">Avatar</Text>
      <Avatar size={size} name={name} uri={uri} radius="pill" />
      <Text wilokeStyles={['mb-4', 'mt-20']}>Loading</Text>
      <Avatar.Loading size={size} />
    </View>
  );
};
