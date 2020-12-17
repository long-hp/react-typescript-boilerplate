import React from 'react';
import { number, optionsKnob, select, text, boolean } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import { Radius } from 'wiloke-react-core';
import Alert, { AlertProps } from 'components/Alert';

export default {
  title: 'General/Alert',
  component: Alert,
};

export const WithProps = () => {
  const type = select(
    'Type',
    getOptions<AlertProps['type'][]>(['danger', 'info', 'success', 'warning']),
    'info',
  );
  const message = text('Message', `Lorem ipsum, dolor sit amet consectetur`);
  const description = text(
    'Description',
    `Minima, tempore magni, incidunt tenetur iusto impedit, corporis officiis suscipit quaerat ut aut ullam necessitatibus porro voluptas repellendus architecto delectus modi! Tenetur placeat inventore reprehenderit soluta, quod veritatis, totam sapiente, quis ab molestiae magnam iusto quaerat!`,
  );
  const closable = boolean('Closable', true);
  const showIcon = boolean('ShowIcon', true);
  const radiusType = optionsKnob('Radius Type', getOptions(['css style', 'number']), 'css style', {
    display: 'inline-radio',
  });
  const radius =
    radiusType === 'css style'
      ? select(
          'Radius',
          getOptions<Radius[]>(['pill', 'round', 'square']),
          'square',
        )
      : number('Radius', 0, { range: true, min: 0, max: 100 });
  const size = select(
    'Size',
    getOptions<AlertProps['size'][]>(['small', 'medium', 'large']),
    'medium',
  );

  return (
    <Alert
      type={type}
      message={message}
      description={description}
      closable={closable}
      showIcon={showIcon}
      radius={radius}
      size={size}
      onClose={action('onClose')}
    />
  );
};
