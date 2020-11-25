import { boolean, number, optionsKnob, select } from '@storybook/addon-knobs';
import React from 'react';
import getOptions from 'stories/utils/getOptions';
import { GridSmart, View, defaultColors, Radius } from 'wiloke-react-core';
import Skeleton from './base/Skeleton';

export default {
  title: 'UI Base/Skeleton',
  component: Skeleton,
};

export const Default = () => {
  return (
    <View container>
      <GridSmart columnWidth={200}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </GridSmart>
    </View>
  );
};

export const WithProps = () => {
  const color = select('Color', getOptions(defaultColors), 'gray2');
  const list = boolean('Use List Skeleton', false);

  const image = boolean('Use Image Skeleton', true);
  const imageRadiusType = optionsKnob(
    'Radius Type',
    getOptions<('css style' | 'number')[]>(['css style', 'number']),
    'css style',
    { display: 'inline-radio' },
  );

  const imageRadius =
    imageRadiusType === 'css style'
      ? optionsKnob(
          'Image Skeleton Radius',
          getOptions<Radius[]>(['square', 'round', 'pill']),
          'square',
          { display: 'inline-radio' },
        )
      : number('Image Skeleton Radius', 10, { range: true, min: 0, max: 100 });
  const imageAspectRatioPercent = number('Image Ratio', 75, { range: true, max: 100, min: 0 });

  const text = boolean('Use Text Skeleton', true);
  const textRadiusType = optionsKnob(
    'Radius Type',
    getOptions<('css style' | 'number')[]>(['css style', 'number']),
    'css style',
    { display: 'inline-radio' },
  );

  const textRadius =
    textRadiusType === 'css style'
      ? optionsKnob(
          'Text Skeleton Radius',
          getOptions<Radius[]>(['square', 'round', 'pill']),
          'square',
          { display: 'inline-radio' },
        )
      : number('Text Skeleton Radius', 10, { range: true, min: 0, max: 100 });
  const textWidthPercent = number('Text Width Percent', 100, { range: true, max: 100, min: 0 });
  const textNumberLines = number('Quanity Number Lines', 3, { range: true, min: 0, max: 9 });

  return (
    <View container>
      <GridSmart columnWidth={300}>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <Skeleton
            key={String(item)}
            color={color}
            text={text}
            textRadius={textRadius}
            textNumberLines={textNumberLines}
            textWidthPercent={textWidthPercent}
            imageAspectRatioPercent={imageAspectRatioPercent}
            image={image}
            imageRadius={imageRadius}
            list={list}
          />
        ))}
      </GridSmart>
    </View>
  );
};
