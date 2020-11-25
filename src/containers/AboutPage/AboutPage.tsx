import Header from 'containers/Header/Header';
import React from 'react';
import { Text, View } from 'wiloke-react-core';

const AboutPage = () => {
  return (
    <View>
      <Header nightModeBlacklist="all" />
      <Text tagName="h1">AboutPage</Text>
    </View>
  );
};

export default AboutPage;
