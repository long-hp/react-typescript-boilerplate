import React from 'react';
import Status, { StatusProps } from 'components/Status';
import getOptions from 'stories/utils/getOptions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { defaultColors } from 'wiloke-react-core';

export default {
  title: 'Components/Status',
  component: Status,
};

export const withProps = () => {
  const size = select(
    'Size',
    getOptions<StatusProps['size'][]>(['small', 'medium', 'large', 'extra-small']),
    'medium',
  );
  const fontSize = number('Font Size', undefined as any);
  const enable = boolean('Enable', false);
  const statusBefore = text('Status Before', 'Disabled');
  const statusAfter = text('Status After', 'Enable');
  const colorAfter = select('Color After', getOptions(defaultColors), 'success');
  const colorBefore = select('Color Before', getOptions(defaultColors), 'gray6');

  return (
    <Status
      size={size}
      colorBefore={colorBefore}
      colorAfter={colorAfter}
      statusBefore={statusBefore}
      statusAfter={statusAfter}
      enable={enable}
      fontSize={fontSize}
    />
  );
};
