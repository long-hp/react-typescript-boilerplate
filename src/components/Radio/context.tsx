import { createContext, InputHTMLAttributes, useContext } from 'react';
import { ColorNames, Size } from 'wiloke-react-core';
import { Value } from './Radio';

export interface RadioGroupStateValue {
  /** Value cua radio */
  value?: Value;
  /** disabled tat ca radio */
  disabled?: boolean;
  /** Thuoc tinh name html cua radio */
  name?: string;
  /** Kich thuoc Radio */
  size?: Size;
  /** Block Radio Button */
  block?: boolean;
  /** Color khi radio active */
  activeColor?: ColorNames;
  /** Color text khi radio button active */
  textActiveColor?: ColorNames;
  /** Màu border được lấy màu từ ThemeProvider */
  borderColor?: ColorNames;
}

export type RadioGroupAction = InputHTMLAttributes<HTMLInputElement>['onChange'];

const RadioGroupContext = createContext<RadioGroupStateValue | null>(null);

const RadioGroupActionContext = createContext<RadioGroupAction | null>(null);

export const RadioGroupStateProvider = RadioGroupContext.Provider;

export const RadioGroupActionProvider = RadioGroupActionContext.Provider;

export const useRadioState = () => {
  const state = useContext(RadioGroupContext);
  return state;
};

export const useRadioAction = () => {
  const action = useContext(RadioGroupActionContext);
  return action;
};
