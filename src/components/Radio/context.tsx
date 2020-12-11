import { createContext, InputHTMLAttributes } from 'react';
import { ColorNames, Size } from 'wiloke-react-core';

export interface RadioGroupContextProps {
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  value?: any;
  disabled?: boolean;
  name?: string;
  size?: Size;
  colorActive?: ColorNames;
  colorTextActive?: ColorNames;
}

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
