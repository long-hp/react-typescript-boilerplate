import Field from 'components/Field';
import NumberInput from 'components/NumberInput';
import { Slider } from 'components/Range';
import Section from 'components/Section/Section';
import TextInput from 'components/TextInput';
import Header from 'containers/Header/Header';
import { range } from 'ramda';
import React, { useState } from 'react';
import 'styles/abstracts/abstracts.scss';
import { GridSmart, Text, View } from 'wiloke-react-core';

const STEP = 1;
const MIN = 1;
const MAX = 10;

const AboutPage = () => {
  const [value, setValue] = useState('');
  const [valueNumber, setValueNumber] = useState(1);

  const _onChangeText = (text: string) => {
    setValue(text);
  };

  const _onChangeRange = (value: number) => {
    setValueNumber(value);
  };

  return (
    <View>
      <Header />
      <View container>
        <Section>
          <View tachyons={['w-40', 'pa3']} backgroundColor="gray2" radius="round">
            <Field
              className="aaaaaaaa"
              color="danger"
              fontSize={20}
              label={
                <Text>
                  <a href="#">Link</a>
                </Text>
              }
            >
              <TextInput radius="round" value={value} onChangeText={_onChangeText} />
            </Field>
            <Field color="dark" fontSize={20} label="Field title">
              <TextInput radius={5} block type="text" disabled />
            </Field>

            <Field
              label="Range with rc-slider"
              note="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque provident temporibus modi accusantium dignissimos"
              fontSize={20}
              color="dark"
            >
              <View row tachyons={['items-center', 'mt3', 'mb3']}>
                <View columns={[9, 9, 9]}>
                  <Slider
                    value={valueNumber}
                    min={MIN}
                    max={MAX}
                    step={STEP}
                    className="aaaaa"
                    trackStyle={{ backgroundColor: 'aquamarine' }}
                    handleStyle={{ backgroundColor: '#fff' }}
                    railStyle={{ backgroundColor: '#ccc' }}
                    onChange={_onChangeRange}
                  />
                </View>
                <View columns={[3, 3, 3]}>
                  <NumberInput value={valueNumber} onChangeNumber={_onChangeRange} inputProps={{ min: MIN, max: MAX, step: STEP }} />
                </View>
              </View>
            </Field>
          </View>

          <View tachyons="mt3">
            <GridSmart columnWidth={250}>
              {range(0, valueNumber).map(item => (
                <View key={item} backgroundColor="gray4" height={200} tachyons={['flex', 'justify-center', 'items-center']}>
                  <Text tagName="h3" color="gray9">
                    {item + 1}
                  </Text>
                </View>
              ))}
            </GridSmart>
          </View>
        </Section>
      </View>
    </View>
  );
};

export default AboutPage;
