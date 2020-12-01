import React from 'react';
import Section from 'components/Section';
import { Header } from 'containers/Header';
import { Text, View } from 'wiloke-react-core';

const AboutPage = () => {
  return (
    <View>
      <Header />
      <View container>
        <Section>
          <Text tagName="h1">About Page</Text>
        </Section>
      </View>
    </View>
  );
};

export default AboutPage;
