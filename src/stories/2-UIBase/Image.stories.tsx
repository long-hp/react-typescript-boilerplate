import React from 'react';
import { ImageProps, Text, View, GridSmart } from 'wiloke-react-core';
import { number, optionsKnob } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import Image from './base/Image';

export default {
  title: 'UI Base/Image',
  component: Image,
};

export const WithProps = () => {
  const srcType = optionsKnob('Src Type', getOptions(['srcSet', 'src']), 'src', {
    display: 'inline-radio',
  });

  const aspectRatioInPercent = number('aspectRatioInPercent', 0, { range: true, min: 0, max: 100 });

  const radiusType = optionsKnob(
    'Radius Type',
    getOptions<('css style' | 'number')[]>(['css style', 'number']),
    'css style',
    { display: 'inline-radio' },
  );

  const radius =
    radiusType === 'css style'
      ? optionsKnob(
          'Radius',
          getOptions<ImageProps['radius'][]>(['square', 'pill']),
          'square',
          { display: 'inline-radio' },
        )
      : number('Radius', 10, { range: true, min: 0, max: 100 });

  const srcSet = {
    '500': 'https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-1024x683.jpeg',
    '768': 'https://images.pexels.com/photos/3874098/pexels-photo-3874098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    '992': 'https://images.pexels.com/photos/4199096/pexels-photo-4199096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    '1200': 'https://images.pexels.com/photos/5392513/pexels-photo-5392513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };
  const src = 'https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-1024x683.jpeg';
  const previewSrc = 'https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-4x3.jpeg';

  return (
    <View container>
      <Image
        alt={previewSrc}
        aspectRatioInPercent={aspectRatioInPercent}
        radius={radius}
        src={srcType === 'src' ? src : srcSet}
        previewSrc={previewSrc}
      />
      <GridSmart columnWidth={500}>
        <Image
          src={{
            300: 'https://images.pexels.com/photos/5700172/pexels-photo-5700172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            350: `https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
          }}
        />
        <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
        <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
        <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
        <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
        <Image src={`https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`} />
      </GridSmart>
    </View>
  );
};

export const WithLazyLoad = () => {
  const srcSet = {
    '500': 'https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-1024x683.jpeg',
    '768': 'https://images.pexels.com/photos/3874098/pexels-photo-3874098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    '992': 'https://images.pexels.com/photos/4199096/pexels-photo-4199096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    '1200': 'https://images.pexels.com/photos/5392513/pexels-photo-5392513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };
  const previewSrc = 'https://highspeedblog.com/wp-content/uploads/2020/06/pexels-photo-3653124-4x3.jpeg';
  return (
    <View container>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 1 + Width Height</Text>
        <GridSmart columnWidth={300} columnCount={2}>
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
        </GridSmart>
      </View>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 2</Text>
        <Image src={srcSet} previewSrc={previewSrc} />
      </View>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 3 + Width Heiht</Text>
        <GridSmart columnWidth={300} columnCount={2}>
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} aspectRatioInPercent={50} />
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
          <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} aspectRatioInPercent={50} />
        </GridSmart>
      </View>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 4</Text>
        <Image src={srcSet} previewSrc={previewSrc} aspectRatioInPercent={100} />
      </View>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 5</Text>
        <Image src={srcSet} previewSrc={previewSrc} />
      </View>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 6 + Width Heiht</Text>
        <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
      </View>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 7</Text>
        <Image src={srcSet} previewSrc={previewSrc} />
      </View>
      <View style={{ marginBottom: 500 }}>
        <Text tagName="h2">Image 8 + Width Heiht</Text>
        <Image src={srcSet} previewSrc={previewSrc} width={1024} height={683} />
      </View>
    </View>
  );
};
