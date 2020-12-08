
import Checkbox from 'components/Checkbox';
import ColorPicker from 'components/ColorPicker';
import Field from 'components/Field';
import { NumberInput } from 'components/NumberInput';
import RangeSlideBeauty from 'components/RangeSlideBeauty';
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
          <View tachyons={['w-40', 'pa3']} backgroundColor="gray2" radius="round">
            <View>
              <RangeSlideBeauty.Loading />
              <RangeSlideBeauty
                value={valueNumber}
                label="Range slide beauty"
                note="*note"
                max={MAX}
                min={MIN}
                step={STEP}
                backgroundInnerField="facebook"
                onChangeNumber={_onChangeRange}
              />
              <NumberInput
                value={valueNumber}
                min={MIN}
                max={MAX}
                step={STEP}
                sizeInput="medium"
                borderColor="danger"
                onChangeNumber={_onChangeRange}
              />

              <NumberInput.Loading />
            </View>

            <Field backgroundColor="light" tachyons="pa2" radius={'round'} borderWidth="2/6" borderColor="gray9">
              <View tachyons={['flex', 'justify-between', 'items-center']}>
                <ColorPicker
                  placement="bottom-start"
                  pickerType="sketch"
                  color={colorState}
                  colorPicker={rgbColor}
                  onChange={_onChangeColorPicker}
                  onChangeComplete={_onChangeColorPicker}
                />
                <Text color="gray6">{colorPreview}</Text>
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
        <Checkbox size="extra-small">Hello</Checkbox>
        <Checkbox size="small">Hello</Checkbox>
        <Checkbox size="medium">Hello</Checkbox>
        <Checkbox checked disabled size="large">
          Hello
        </Checkbox>
      </View>
    </View>
  );
};

export default AboutPage;
