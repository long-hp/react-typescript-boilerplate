import { ComponentType } from 'react';

export interface HomePageLocationState {
  homePage: string;
}
export interface AboutPageLocationState {
  aboutPage: string;
}

export interface LocationStates {
  '/': {
    homePage: string;
  };
  '/abc/': {
    anotherPage2Id: string;
  };
  '/anotherPage/': {
    anotherPageId: string;
  };
  '/anotherPage': {
    anotherPage: string;
  };
  '/anotherPages': {
    anotherPages: string;
  };
  '/about': {
    aboutPage: string;
  };
  '/about-but-longer': {
    aboutPageLonger: string;
  };
  '/login': {
    loginPage: string;
  };
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
