import React from 'react';
import { Welcome } from '@storybook/react/demo';
import { Space, Text, View, GridSmart } from 'wiloke-react-core';

export default {
  title: 'Start/Welcome',
  component: Welcome,
};

export const Start = () => <Welcome />;

export const Colors = () => {
  return (
    <View>
      <Text tagName="h3" css={{ marginBottom: '15px' }}>
        Color Primary, Secondary, Quaternary, Tertiary, Quinary
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="primary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          primary
        </View>
        <View backgroundColor="secondary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          secondary
        </View>
        <View backgroundColor="quaternary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          quaternary
        </View>
        <View backgroundColor="tertiary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          tertiary
        </View>
        <View backgroundColor="quinary" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          quinary
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" css={{ marginBottom: '15px' }}>
        Color Warning, Danger...
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="danger" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          danger
        </View>
        <View backgroundColor="warning" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          warning
        </View>
        <View backgroundColor="success" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          success
        </View>
        <View backgroundColor="info" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          info
        </View>
        <View backgroundColor="heart" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          heart
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" css={{ marginBottom: '15px' }}>
        Color Social
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="facebook" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          facebook
        </View>
        <View backgroundColor="twitter" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          twitter
        </View>
        <View backgroundColor="dribbble" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          dribbble
        </View>
        <View backgroundColor="youtube" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          youtube
        </View>
        <View backgroundColor="instagram" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          instagram
        </View>
        <View backgroundColor="tumblr" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          tumblr
        </View>
        <View backgroundColor="vimeo" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          vimeo
        </View>
        <View backgroundColor="vk" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          vk
        </View>
        <View backgroundColor="digg" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          digg
        </View>
        <View backgroundColor="github" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          github
        </View>
        <View backgroundColor="linkedin" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          linkedin
        </View>
        <View backgroundColor="reddit" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          reddit
        </View>
        <View backgroundColor="stumbleupon" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          stumbleupon
        </View>
        <View backgroundColor="pinterest" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          pinterest
        </View>
        <View backgroundColor="behance" color="light" css={{ padding: '20px 30px' }} radius={10} nightModeBlacklist="all">
          behance
        </View>
      </GridSmart>
      <Space size={30} />
      <Text tagName="h3" css={{ marginBottom: '15px' }}>
        Color Gray, Dark, Light
      </Text>
      <GridSmart columnWidth={300} columnCount={3}>
        <View backgroundColor="transparent" css={{ padding: '20px 30px' }} radius={10}>
          transparent
        </View>
        <View backgroundColor="light" css={{ padding: '20px 30px' }} radius={10}>
          light
        </View>
        <View backgroundColor="gray1" css={{ padding: '20px 30px' }} radius={10}>
          gray1
        </View>
        <View backgroundColor="gray2" css={{ padding: '20px 30px' }} radius={10}>
          gray2
        </View>
        <View backgroundColor="gray3" css={{ padding: '20px 30px' }} radius={10}>
          gray3
        </View>
        <View backgroundColor="gray4" css={{ padding: '20px 30px' }} radius={10}>
          gray4
        </View>
        <View backgroundColor="gray5" color="light" css={{ padding: '20px 30px' }} radius={10}>
          gray5
        </View>
        <View backgroundColor="gray6" color="light" css={{ padding: '20px 30px' }} radius={10}>
          gray6
        </View>
        <View backgroundColor="gray7" color="light" css={{ padding: '20px 30px' }} radius={10}>
          gray7
        </View>
        <View backgroundColor="gray8" color="light" css={{ padding: '20px 30px' }} radius={10}>
          gray8
        </View>
        <View backgroundColor="gray9" color="light" css={{ padding: '20px 30px' }} radius={10}>
          gray9
        </View>
        <View backgroundColor="dark" color="light" css={{ padding: '20px 30px' }} radius={10}>
          dark
        </View>
      </GridSmart>
    </View>
  );
};
