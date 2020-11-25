import Header from 'containers/Header/Header';
import React from 'react';
import { Text, View } from 'wiloke-react-core';

const NotFoundPage = () => {
  return (
    <View>
      <Header nightModeBlacklist="all" />
      <Text tagName="h1">NotFoundPage</Text>
    </View>
  );
};

export default NotFoundPage;
