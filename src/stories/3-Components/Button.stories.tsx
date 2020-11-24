import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from 'components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const WithProps = () => {
  const size = select(
    'Size',
    getOptions<ButtonProps['size'][]>(['small', 'medium', 'large']),
    'medium',
  );
  const children = text('Children', 'Button');
  return (
    <Button onClick={action('onClick')} size={size}>
      {children}
    </Button>
  );
};
