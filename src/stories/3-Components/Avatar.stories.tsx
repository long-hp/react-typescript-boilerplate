import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import Avatar from 'components/Avatar';

export default {
  title: 'General/Avatar',
  component: (Avatar as any).type,
};

export const Default = () => {
  const uri = text('Image Uri', '');
  const size = number('Size', 30, { range: true, min: 10, max: 100 });
  const name = text('Name', 'Wiloke');

  return <Avatar size={size} name={name} uri={uri} radius="pill" />;
};
