import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';
import { boolean, number, optionsKnob, select, text } from '@storybook/addon-knobs';
import { BorderStyle, BorderWidth, ColorNames, defaultColors, Radius, Size } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const WithProps = () => {
  const isLoading = boolean('Loading', false);
  let size: Size = 'medium';
  let checked;
  let disabled;
  let iconActiveColor: ColorNames = 'light';
  let borderWidth: BorderWidth = '2/6';
  let borderColor: ColorNames = 'gray5';
  let borderStyle: BorderStyle = 'solid';
  let activeColor: ColorNames = 'primary';
  const radiusType = optionsKnob('Radius Type', getOptions(['css style', 'number']), 'css style', {
    display: 'inline-radio',
  });
  const radius =
    radiusType === 'css style'
      ? select<Radius>(
          'Radius',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'round',
        )
      : number('Radius', 0, { range: true, min: 0, max: 100 });

  if (!isLoading) {
    checked = boolean('Checked', false);
    disabled = boolean('Disabled', false);
    size = select<Size>(
      'Size',
      getOptions<Size[]>(['extra-small', 'small', 'medium', 'large']),
      'medium',
    ) as any;
    iconActiveColor = select<ColorNames>('Color Icon Active', getOptions(defaultColors), 'light');
    activeColor = select<ColorNames>('Color Checkbox Active', getOptions(defaultColors), 'primary');
    borderWidth = select<BorderWidth>(
      'Boder Width',
      getOptions<BorderWidth[]>(['0/6', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
      '2/6',
    );
    borderColor = select<ColorNames>('Border Color', getOptions(defaultColors), 'gray5');
    borderStyle = select<BorderStyle>(
      'Border Style',
      getOptions<BorderStyle[]>(['solid', 'dotted', 'dashed']),
      'solid',
    );
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
