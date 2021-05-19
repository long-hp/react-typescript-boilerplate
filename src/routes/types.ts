import { ComponentType } from 'react';
import { LocationStates } from './LocationStates';

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
