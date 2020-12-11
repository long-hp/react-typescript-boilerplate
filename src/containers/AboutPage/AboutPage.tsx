import React from 'react';
import { View } from 'wiloke-react-core';
import Header from 'containers/Header/Header';
import Section from 'components/Section';
import SliderShow from 'components/SliderShow';

const AboutPage = () => {
  return (
    <View>
      <Header />
      <View container>
        <Section>
          <SliderShow items={[{ title: '1' }, { title: '2' }, { title: '3' }]} />
        </Section>
      </View>
    </View>
  );
};

export default AboutPage;
