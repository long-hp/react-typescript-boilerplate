import { createContext, InputHTMLAttributes } from 'react';

export interface RadioGroupContextProps {
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  value?: any;
  disabled?: boolean;
  name?: string;
}

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
