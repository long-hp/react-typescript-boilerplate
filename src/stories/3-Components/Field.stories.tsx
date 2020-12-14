import React from 'react';
import Field from 'components/Field';
import { TextInput } from 'components/TextInput';
import { View } from 'wiloke-react-core';
import ColorPickerBeauty from 'components/ColorPickerBeauty';

export default {
  title: 'Fields/Field',
  component: Field,
};

export const WithProps = () => {
  return (
    <View tachyons="w-50">
      <Field label="First Name" note="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, impedit.">
        <TextInput placeholder="First name..." block />
      </Field>
      <Field label="Text Input" note="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, impedit.">
        <ColorPickerBeauty color="rgb(255,0,0)" />
      </Field>
    </View>
  );
};
