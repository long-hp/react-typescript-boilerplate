import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';
import { boolean, number, optionsKnob, select, text } from '@storybook/addon-knobs';
import { BorderStyle, BorderWidth, defaultColors, Radius, Size } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let size;
  let checked;
  let disabled;
  let iconActiveColor;
  let borderWidth;
  let borderColor;
  let borderStyle;
  const radiusType = optionsKnob('Radius Type', getOptions(['css style', 'number']), 'css style', {
    display: 'inline-radio',
  });
  let radius =
    radiusType === 'css style'
      ? select(
          'Radius',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius', 0, { range: true, min: 0, max: 100 });
  let activeColor;

  if (!isLoading) {
    checked = boolean('Checked', false);
    disabled = boolean('Disabled', false);
    size = select(
      'Size',
      getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
      'medium',
    ) as any;
    iconActiveColor = select('Color Icon Active', getOptions(defaultColors), 'light') as any;
    activeColor = select('Color Checkbox Active', getOptions(defaultColors), 'behance') as any;
    borderWidth = select(
      'Boder Width',
      getOptions<BorderWidth[]>(['0/6', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
      '1/6',
    ) as any;
    borderColor = select('Border Color', getOptions(defaultColors), 'gray5') as any;
    borderStyle = select(
      'Border Style',
      getOptions<BorderStyle[]>(['solid', 'dotted', 'dashed']),
      'solid',
    ) as any;
    radius =
      radiusType === 'css style'
        ? select(
            'Radius',
            getOptions<Radius[]>(['pill', 'round', 'square']),
            'square',
          )
        : number('Radius', 0, { range: true, min: 0, max: 100 });
  }
  const [checkedState, setCheckedState] = useState(checked);

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(!checkedState);
    action('onClick')(event.target);
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
      onChange={_handleChange}
    >
      {text('Children', 'Day la checkbox')}
    </Checkbox>
  );
};
