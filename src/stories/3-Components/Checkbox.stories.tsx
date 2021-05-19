import React from 'react';
import Checkbox from 'components/Checkbox';
import { boolean, number, optionsKnob, select, text } from '@storybook/addon-knobs';
import { BorderStyle, ColorNames, defaultColors, Radius, Size } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Fields/Checkbox',
  component: (Checkbox as any).type,
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let size: Size = 'medium';
  let checked;
  let disabled;
  let iconActiveColor: ColorNames = 'light';
  let borderWidth = 2;
  let borderColor: ColorNames = 'gray5';
  let borderStyle: BorderStyle = 'solid';
  let activeColor: ColorNames = 'primary';
  const radiusType = optionsKnob<'css style' | 'number'>('Radius Type', getOptions(['css style', 'number']), 'number', {
    display: 'inline-radio',
  });
  const radius =
    radiusType === 'css style'
      ? select<Radius>(
          'Radius',
          getOptions<Radius[]>(['pill', 'square']),
          'square',
        )
      : number('Radius', 5, { range: true, min: 0, max: 100 });

  if (!isLoading) {
    checked = boolean('Checked', false);
    disabled = boolean('Disabled', false);
    size = select<Size>(
      'Size',
      getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
      'small',
    ) as any;
    iconActiveColor = select<ColorNames>('Color Icon Active', getOptions(defaultColors), 'light');
    activeColor = select<ColorNames>('Color Checkbox Active', getOptions(defaultColors), 'primary');
    borderWidth = number('Boder Width', 2);
    borderColor = select<ColorNames>('Border Color', getOptions(defaultColors), 'gray5');
    borderStyle = select<BorderStyle>(
      'Border Style',
      getOptions<BorderStyle[]>(['solid', 'dotted', 'dashed']),
      'solid',
    );
  }

  const _handleValueChange = (value: boolean) => {
    action('onValueChange')(value);
  };

  return isLoading ? (
    <Checkbox.Loading radius={radius} />
  ) : (
    <Checkbox
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderWidth={borderWidth}
      activeColor={activeColor}
      iconActiveColor={iconActiveColor}
      disabled={disabled}
      size={size}
      radius={radius}
      checked={checked}
      onValueChange={_handleValueChange}
    >
      {text('Children', 'Lorem ipsum')}
    </Checkbox>
  );
};
