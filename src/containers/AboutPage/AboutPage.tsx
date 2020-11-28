import FanyButton from 'components/FancyButton';
import Field from 'components/Field';
import Input from 'components/Input';
import Section from 'components/Section/Section';
import Header from 'containers/Header/Header';
import React from 'react';
import { View } from 'wiloke-react-core';

const AboutPage = () => {
  return (
    <View>
      <Header />
      <View container>
        <Section>
          <FanyButton tachyons="flex" color="danger" backgroundColor="facebook" radius="pill" fontSize={16}>
            <View>
              <span>J</span>
              <span>U</span>
              <span>M</span>
              <span>P</span>
            </View>
          </FanyButton>

          <View tachyons={['w-40']}>
            <Field color="dark" fontSize={20} label="Field title">
              <Input borderRadius={5} />
            </Field>
            <Field color="dark" fontSize={20} label="Field title">
              <Input borderRadius={5} />
            </Field>
            <Field color="dark" fontSize={20} label="Field title">
              <Input borderRadius={5} />
            </Field>
          </View>
        </Section>
      </View>
    </View>
  );
};

export default AboutPage;
