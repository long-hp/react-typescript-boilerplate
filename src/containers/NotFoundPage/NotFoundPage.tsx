import Section from 'components/Section';
import { Header } from 'containers/Header';
import React from 'react';
import { Text, View } from 'wiloke-react-core';

const NotFoundPage = () => {
  return (
    <View>
      <Header />
      <View container>
        <Section>
          <Text tagName="h1">404</Text>
        </Section>
      </View>
    </View>
  );
};

export default NotFoundPage;
