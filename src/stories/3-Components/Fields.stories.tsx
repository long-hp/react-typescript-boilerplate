import { boolean, number, select, text } from '@storybook/addon-knobs';
import RangeSlideBeauty from 'components/RangeSlideBeauty';
import React, { useState } from 'react';
import getOptions from 'stories/utils/getOptions';
import { defaultColors } from 'wiloke-react-core';

export default {
  title: 'Components/Fields',
  component: RangeSlideBeauty,
};

export const FieldRangeSlideBeauty = () => {
  const [value, setValue] = useState(0);

  const min = number('Min', 0);
  const max = number('Max', 10);
  const step = number('Step', 1);
  const isLoading = boolean('Loading', false);

  const label = text('Label', 'Label');
  const note = text('Note', 'Note');

  const dots = boolean('Dots', false);

  const backgroundInner = select('Background Inner Field', getOptions(defaultColors), 'primary');

  const _onChangeRange = (value: number) => {
    setValue(value);
  };

  const _renderField = () => {
    return isLoading ? (
      <RangeSlideBeauty.Loading />
    ) : (
      <RangeSlideBeauty
        label={label}
        note={note}
        value={value}
        min={min}
        max={max}
        step={step}
        dots={dots}
        backgroundInnerField={backgroundInner}
        onChangeNumber={_onChangeRange}
      />
    );
  };

  return _renderField();
};
