import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import Collapse from 'components/Collapse';
import ColorPickerBeauty from 'components/ColorPickerBeauty';
import Field from 'components/Field';
import SwitchBeauty from 'components/SwitchBeauty';
import { TextInput } from 'components/TextInput';
import React from 'react';
import getOptions from 'stories/utils/getOptions';
import { BorderStyle, defaultColors } from 'wiloke-react-core';

export default {
  title: 'General/Collapse',
  component: Collapse,
  subcomponents: { 'Collapse.Panel': (Collapse.Panel as any).type },
};

export const Default = () => {
  return (
    <Collapse>
      <Collapse.Panel>
        <Field label="First Name" note="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, impedit.">
          <TextInput placeholder="First name..." block backgroundColor="light" />
        </Field>
        <Field style={{ marginBottom: 0 }} label="Text Input" note="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, impedit.">
          <ColorPickerBeauty color="rgb(255,0,0)" />
        </Field>
      </Collapse.Panel>
    </Collapse>
  );
};

export const WithProps = () => {
  const radius = number('Radius', 5, { range: true, min: 0, max: 30 });
  const backgroundColor = select('Background color', getOptions(defaultColors), 'gray2');
  const borderColor = select('Border color', getOptions(defaultColors), 'gray5');
  const borderStyle = select(
    'Border Style',
    getOptions<BorderStyle[]>(['dashed', 'dotted', 'solid']),
    'solid',
  );
  const borderWidth = number('Border Width', 1);
  const showArrow = boolean('Show Arrow', true);
  const disabled = boolean('Disabled', false);

  return (
    <Collapse onChange={action('onChange')}>
      <Collapse.Panel
        header="Slider"
        radius={radius}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        showArrow={showArrow}
        disabled={disabled}
        panelKey="duong"
      >
        <Field label="Autoplay" style={{ marginBottom: 0 }}>
          <SwitchBeauty />
        </Field>
      </Collapse.Panel>

      <Collapse.Panel
        header="Color"
        radius={radius}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        showArrow={showArrow}
        disabled={disabled}
        panelKey="1"
      >
        <Field label="Text" style={{ marginBottom: 0 }}>
          <ColorPickerBeauty />
        </Field>
      </Collapse.Panel>
    </Collapse>
  );
};
