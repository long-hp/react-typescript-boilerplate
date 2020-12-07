import ColorPicker from 'components/ColorPicker';
import Field from 'components/Field';
import { NumberInput } from 'components/NumberInput';
import RangeSlideBeauty from 'components/RangeSlideBeauty';
import Section from 'components/Section/Section';
import Header from 'containers/Header/Header';
import { range } from 'ramda';
import React, { useState } from 'react';
import { ColorResult, HSLColor, RGBColor } from 'react-color';
import { decimalToHex } from 'components/ColorPicker/decimalToHex';
import { GridSmart, Text, View } from 'wiloke-react-core';

const STEP = 1;
const MIN = 0;
const MAX = 10;

const AboutPage = () => {
  const [valueNumber, setValueNumber] = useState(0);
  const [colorPreview, setColorPreview] = useState('#333333');
  const [colorState, setColorState] = useState<HSLColor>({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1,
  });
  const [rgbColor, setRgbColor] = useState<RGBColor>({
    r: 0,
    g: 0,
    b: 0,
    a: 0.5,
  });

  const _onChangeRange = (value: number) => {
    setValueNumber(value);
  };

  const _onChangeColorPicker = (color: ColorResult) => {
    if (color.hsl !== colorState) {
      setRgbColor(color.rgb);
      setColorState(color.hsl);
      const hexCode = `${color.hex}${decimalToHex(Number(color.rgb.a))}`;
      setColorPreview(hexCode);
    }
  };

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
      </View>
    </View>
  );
};

export default AboutPage;
