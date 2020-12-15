import { createContext } from 'react';

type KeyStateValue = string | string[];
export interface CollapseState {
  /** Active key của panel */
  activeKey?: KeyStateValue;
  /** Default Active key của panel */
  defaultActiveKey?: KeyStateValue;
  /** disabled panel */
  disabled?: boolean;
}
export interface CollapseDispatch {
  onChange?: (activeKey: KeyStateValue) => void;
}

export const CollapseStateContext = createContext<CollapseState | null>(null);
export const CollapseDispatchContext = createContext<CollapseDispatch | null>(null);

export const CollapseStateProvider = CollapseStateContext.Provider;
export const CollapseDispatchProvider = CollapseDispatchContext.Provider;
