import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { number, optionsKnob, text } from '@storybook/addon-knobs';
import { View } from 'wiloke-react-core';
import getOptions from 'stories/utils/getOptions';
import CountTo from './base/CountTo';

export default {
  title: 'UI Base/CountTo',
  component: CountTo,
};

export const Default = () => {
  const [start, setStart] = useState(true);

  const countEnd = () => {
    setStart(false);
    action('onEndCounting')();
  };
  const countStart = () => setStart(true);

  const targetNumber = number('Target Number', 56789);
  const digitSpace = text('Digit space', ',');
  const quanityPlaceholder = number('Quanity Placeholder', 50);
  const animationName = optionsKnob('Src Type', getOptions(['countUp', 'countDown']), 'countDown', {
    display: 'inline-radio',
  });
  const animationDuration = number('animationDuration', 2000, { range: true, min: 0, max: 10000 });
  return (
    <View>
      <button onClick={countStart}>Start</button>
      <CountTo
        start={start}
        targetNumber={targetNumber}
        digitSpace={digitSpace}
        quanityPlaceholder={quanityPlaceholder}
        animationName={animationName}
        animationDuration={animationDuration}
        onStartCounting={action('onStartCounting')}
        onEndCounting={countEnd}
      />
    </View>
  );
};
