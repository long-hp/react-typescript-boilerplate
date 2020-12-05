import React from 'react';
import Section from 'components/Section';
import { Header } from 'containers/Header';
import { Text, View } from 'wiloke-react-core';
import TextInput from 'components/TextInput';
import StatusBar from 'components/StatusBar';
import SliderBar from 'components/SliderBar';
import Checkbox from 'components/Checkbox';

const AboutPage = () => {
  return (
    <View>
      <Header />
      <View container>
        <Section>
          <Text tagName="h1">About Page</Text>
          <TextInput size="large" />
          <StatusBar />
          <SliderBar block={false} defaultMin={0} defaultMax={100} />
          <Checkbox disabled>Hello</Checkbox>
          {/* <GridSmart columnWidth={200}><Product id={1} /></GridSmart> */}
        </Section>
      </View>
    </View>
  );
};

export default AboutPage;
