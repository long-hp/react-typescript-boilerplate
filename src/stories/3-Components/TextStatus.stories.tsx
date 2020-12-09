import React from 'react';
import getOptions from 'stories/utils/getOptions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { defaultColors, FontFamilyNames, FontWeight } from 'wiloke-react-core';
import TextStatus, { TextStatusProps } from 'components/TextStatus';

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
  const enableColor = select('Enable Color', getOptions(defaultColors), 'success');
  const disableColor = select('Disable Color', getOptions(defaultColors), 'gray7');
  const fontFamily = select<FontFamilyNames>(
    'Font Family',
    getOptions<FontFamilyNames[]>(['primary', 'quaternary', 'secondary', 'tertiary']),
    'primary',
  );
  const fontWeight = select<FontWeight>(
    'Font Weight',
    getOptions<FontWeight[]>(['100', '200', '300', '400', '500', '600', '700', '800', '900']),
    '400',
  );

  return (
    <TextStatus
      size={size}
      enable={enable}
      fontSize={fontSize}
      disableText={disableText}
      enableText={enableText}
      enableColor={enableColor}
      disableColor={disableColor}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
    />
  );
};
