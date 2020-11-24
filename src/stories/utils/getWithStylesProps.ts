import { select, optionsKnob, number, boolean } from '@storybook/addon-knobs';
import { BorderStyle, BorderWidth, defaultColors, WithStylesProps } from 'wiloke-react-core';
import getOptions from './getOptions';

export const borderStyleGroup = 'Border Style';
export const generalGroup = 'General';

const getWithStylesProps = (): WithStylesProps & { radiusType: string; borderEnalbed: boolean } => {
  const backgroundColor = select('Background Color', getOptions(defaultColors), 'primary', generalGroup);
  const backgroundColorHover = select('Background Color Hover', getOptions(defaultColors), 'primary', generalGroup);
  const color = select('Color', getOptions(defaultColors), 'light', generalGroup);
  const colorHover = select('Color Hover', getOptions(defaultColors), 'light', generalGroup);
  const radiusType = optionsKnob(
    'Radius Type',
    getOptions<('css style' | 'number')[]>(['css style', 'number']),
    'css style',
    {
      display: 'inline-radio',
    },
    generalGroup,
  );
  const radius =
    radiusType === 'css style'
      ? select(
          'Radius',
          getOptions<WithStylesProps['radius'][]>(['round', 'pill', 'square']),
          'square',
          generalGroup,
        )
      : number('Radius', 10, { range: true, min: 0, max: 100 }, generalGroup);

  const borderEnalbed = boolean('Border Enabled', false, borderStyleGroup);
  const borderColor = borderEnalbed
    ? select('Border Color', getOptions(defaultColors), 'primary', borderStyleGroup)
    : select('Border Color ', getOptions(defaultColors), undefined, borderStyleGroup);
  const borderColorHover = borderEnalbed
    ? select('Border Color Hover', getOptions(defaultColors), 'secondary', borderStyleGroup)
    : select('Border Color Hover ', getOptions(defaultColors), undefined, borderStyleGroup);
  const borderStyle = borderEnalbed
    ? select(
        'Border Style',
        getOptions<BorderStyle[]>(['solid', 'dotted', 'dashed']),
        'solid',
        borderStyleGroup,
      )
    : select(
        'Border Style ',
        getOptions<BorderStyle[]>(['solid', 'dotted', 'dashed']),
        undefined,
        borderStyleGroup,
      );
  const borderWidth = borderEnalbed
    ? select(
        'Border Width',
        getOptions<BorderWidth[]>(['1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
        '2/6',
        borderStyleGroup,
      )
    : select(
        'Border Width ',
        getOptions<BorderWidth[]>(['1/6', '2/6', '3/6', '4/6', '5/6', '6/6']),
        undefined,
        borderStyleGroup,
      );
  return {
    backgroundColor,
    backgroundColorHover,
    color,
    colorHover,
    radiusType,
    radius,
    borderEnalbed,
    borderColor,
    borderColorHover,
    borderStyle,
    borderWidth,
  };
};

export default getWithStylesProps;
