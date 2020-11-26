import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { Space, Text, View, GridSmart } from 'wiloke-react-core';

export default {
  title: 'Start/Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

export const Colors = () => {
  return (
    <View>
      <Text tagName="h3" tachyons="mb3">
        Color Primary, Secondary, Quaternary, Tertiary, Quinary
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="primary" color="light" tachyons={['ph3', 'pv4']}>
          react: primary | scss: $color-primary
        </View>
        <View backgroundColor="secondary" color="light" tachyons={['ph3', 'pv4']}>
          react: secondary | scss: $color-secondary
        </View>
        <View backgroundColor="quaternary" color="light" tachyons={['ph3', 'pv4']}>
          react: quaternary | scss: $color-quaternary
        </View>
        <View backgroundColor="tertiary" color="light" tachyons={['ph3', 'pv4']}>
          react: tertiary | scss: $color-tertiary
        </View>
        <View backgroundColor="quinary" color="light" tachyons={['ph3', 'pv4']}>
          react: quinary | scss: $color-quinary
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" tachyons="mb3">
        Color Warning, Danger...
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="danger" color="light" tachyons={['ph3', 'pv4']}>
          react: danger | scss: $color-danger
        </View>
        <View backgroundColor="warning" color="light" tachyons={['ph3', 'pv4']}>
          react: warning | scss: $color-warning
        </View>
        <View backgroundColor="success" color="light" tachyons={['ph3', 'pv4']}>
          react: success | scss: $color-success
        </View>
        <View backgroundColor="info" color="light" tachyons={['ph3', 'pv4']}>
          react: info | scss: $color-info
        </View>
        <View backgroundColor="heart" color="light" tachyons={['ph3', 'pv4']}>
          react: heart | scss: $color-heart
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" tachyons="mb3">
        Color Social
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="facebook" color="light" tachyons={['ph3', 'pv4']}>
          react: facebook | scss: $color-facebook
        </View>
        <View backgroundColor="twitter" color="light" tachyons={['ph3', 'pv4']}>
          react: twitter | scss: $color-twitter
        </View>
        <View backgroundColor="dribbble" color="light" tachyons={['ph3', 'pv4']}>
          react: dribbble | scss: $color-dribbble
        </View>
        <View backgroundColor="youtube" color="light" tachyons={['ph3', 'pv4']}>
          react: youtube | scss: $color-youtube
        </View>
        <View backgroundColor="instagram" color="light" tachyons={['ph3', 'pv4']}>
          react: instagram | scss: $color-instagram
        </View>
        <View backgroundColor="tumblr" color="light" tachyons={['ph3', 'pv4']}>
          react: tumblr | scss: $color-tumblr
        </View>
        <View backgroundColor="vimeo" color="light" tachyons={['ph3', 'pv4']}>
          react: vimeo | scss: $color-vimeo
        </View>
        <View backgroundColor="vk" color="light" tachyons={['ph3', 'pv4']}>
          react: vk | scss: $color-vk
        </View>
        <View backgroundColor="digg" color="light" tachyons={['ph3', 'pv4']}>
          react: digg | scss: $color-digg
        </View>
        <View backgroundColor="github" color="light" tachyons={['ph3', 'pv4']}>
          react: github | scss: $color-github
        </View>
        <View backgroundColor="linkedin" color="light" tachyons={['ph3', 'pv4']}>
          react: linkedin | scss: $color-linkedin
        </View>
        <View backgroundColor="reddit" color="light" tachyons={['ph3', 'pv4']}>
          react: reddit | scss: $color-reddit
        </View>
        <View backgroundColor="stumbleupon" color="light" tachyons={['ph3', 'pv4']}>
          react: stumbleupon | scss: $color-stumbleupon
        </View>
        <View backgroundColor="pinterest" color="light" tachyons={['ph3', 'pv4']}>
          react: pinterest | scss: $color-pinterest
        </View>
        <View backgroundColor="behance" color="light" tachyons={['ph3', 'pv4']}>
          react: behance | scss: $color-behance
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" tachyons="mb3">
        Color Gray, Dark, Light
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="transparent" tachyons={['ph3', 'pv4']}>
          react: transparent | scss: $color-transparent
        </View>
        <View backgroundColor="light" tachyons={['ph3', 'pv4']}>
          react: light | scss: $color-light
        </View>
        <View backgroundColor="gray1" tachyons={['ph3', 'pv4']}>
          react: gray1 | scss: $color-gray-1
        </View>
        <View backgroundColor="gray2" tachyons={['ph3', 'pv4']}>
          react: gray2 | scss: $color-gray-2
        </View>
        <View backgroundColor="gray3" tachyons={['ph3', 'pv4']}>
          react: gray3 | scss: $color-gray-3
        </View>
        <View backgroundColor="gray4" tachyons={['ph3', 'pv4']}>
          react: gray4 | scss: $color-gray-4
        </View>
        <View backgroundColor="gray5" tachyons={['ph3', 'pv4']}>
          react: gray5 | scss: $color-gray-5
        </View>
        <View backgroundColor="gray6" tachyons={['ph3', 'pv4']}>
          react: gray6 | scss: $color-gray-6
        </View>
        <View backgroundColor="gray7" color="gray3" tachyons={['ph3', 'pv4']}>
          react: gray7 | scss: $color-gray-7
        </View>
        <View backgroundColor="gray8" color="gray3" tachyons={['ph3', 'pv4']}>
          react: gray8 | scss: $color-gray-8
        </View>
        <View backgroundColor="gray9" color="gray3" tachyons={['ph3', 'pv4']}>
          react: gray9 | scss: $color-gray-9
        </View>
        <View backgroundColor="dark" color="gray3" tachyons={['ph3', 'pv4']}>
          react: dark | scss: $color-dark
        </View>
      </GridSmart>
    </View>
  );
};
