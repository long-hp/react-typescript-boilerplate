import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import ProgressLoader from './base/ProgressLoader';

export default {
  title: 'UI Base/ProgressLoader',
  component: ProgressLoader,
};

export const WithProps = () => {
  const run = boolean('Run', false);
  const done = boolean('Done', false);

  if (!run) {
    return null;
  }

  return <ProgressLoader done={done} />;
};
