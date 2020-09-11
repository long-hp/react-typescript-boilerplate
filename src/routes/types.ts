import { ComponentType } from 'react';

export interface HomePageLocationState {}
export interface AboutPageLocationState {}

export interface LocationStates {
  '/'?: HomePageLocationState;
  '/about': AboutPageLocationState;
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
