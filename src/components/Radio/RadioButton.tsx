import React, { FC } from 'react';
import { ColorNames } from 'wiloke-react-core';
import RadioGroupContext from './context';
import Radio, { RadioProps } from './Radio';

export interface RadioButtonProps extends RadioProps {
  value?: any;
  name?: string;
  /** Color text khi active radio button*/
  colorTextActive?: ColorNames;
}

const RadioButton: FC<RadioButtonProps> = props => {
  const context = React.useContext(RadioGroupContext);
  const { ...rest } = props;

  if (context) {
    rest.checked = String(props.value) === context.value;
    rest.disabled = props.disabled || (context.disabled as boolean);
  }
  return <Radio colorTextActive={rest.colorTextActive} {...rest} type="button"></Radio>;
};

export default RadioButton;
