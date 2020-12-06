import React, { FC } from 'react';
import { WithTachyonsProps } from 'wiloke-react-core';
import RadioGroupContext from './context';
import Radio, { RadioProps } from './Radio';

export interface RadioButtonProps extends WithTachyonsProps, RadioProps {
  value?: any;
  name?: string;
}

const RadioButton: FC<RadioButtonProps> = props => {
  const context = React.useContext(RadioGroupContext);
  const { ...rest } = props;
  if (context) {
    rest.checked = String(props.value) === context.value;
    rest.disabled = props.disabled || (context.disabled as boolean);
  }
  return <Radio {...rest} type="button"></Radio>;
};

export default RadioButton;
