import React from 'react';
import getOptions from 'stories/utils/getOptions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { ColorNames, defaultColors } from 'wiloke-react-core';
import TextStatus, { TextStatusProps } from 'components/SwitchBeauty/TextStatus';

export default {
  title: 'Components/TextStatus',
  component: TextStatus,
};

export const withProps = () => {
  const size = select(
    'Size',
    getOptions<TextStatusProps['size'][]>(['small', 'medium', 'large', 'extra-small']),
    'medium',
  );
  const fontSize = number('Font Size', undefined as any);
  const enable = boolean('Enable', false);
  const disableText = text('Disable Text', 'Disabled');
  const enableText = text('Enable Text', 'Enable');
  const enableColor = select<ColorNames>('Enable Color', getOptions(defaultColors), 'success');
  const disableColor = select<ColorNames>('Disable Color', getOptions(defaultColors), 'gray7');

  return (
    <TextStatus
      size={size}
      enable={enable}
      fontSize={fontSize}
      disableText={disableText}
      enableText={enableText}
      enableColor={enableColor}
      disableColor={disableColor}
    />
  );
};
