import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Routes from 'routes';
import styleBase from 'styles/base';
import { ThemeOverrides, ThemeProvider, useStyleSheet, View } from 'wiloke-react-core';
import * as css from './styles';

export const themeOverrides: ThemeOverrides = {
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Poppins, sans-serif',
    tertiary: 'Merriweather, serif',
    quaternary: 'Vibes, serif',
  },
  colors: {
    primary: '#f06292',
    secondary: '#3ece7e',
    tertiary: '#f4b34d',
    quaternary: '#fc6363',
    light: '#ffffff',
    gray1: '#fbfbfc',
    gray2: '#f3f3f6',
    gray3: '#f1f1f3',
    gray4: '#e7e7ed',
    gray5: '#9ea6ba',
    gray6: '#787f95',
    gray7: '#70778b',
    gray8: '#485273',
    gray9: '#252c41',
    dark: '#12151f',
  },
  nightModeColors: {
    dark: '#ffffff',
    gray9: '#fbfbfc',
    gray8: '#f3f3f6',
    gray7: '#f1f1f3',
    gray6: '#e7e7ed',
    gray5: '#9ea6ba',
    gray4: '#787f95',
    gray3: '#70778b',
    gray2: '#485273',
    gray1: '#252c41',
    light: '#202638',
  },
  cssInJs: {
    pixelToRem: false,
    devMode: true,
  },
  grid: {
    container: {
      width: 1300,
      gap: 15,
    },
    columns: {
      max: 12,
      gap: 30,
    },
    breakpoints: {
      xs: 'default',
      sm: 768,
      md: 992,
      lg: 1300,
    },
  },
};

export const CSSGlobal: FC = ({ children }) => {
  const { renderer } = useStyleSheet();
  renderer.renderStatic(styleBase);

  return <View css={css.cssGlobalWithTheme}>{children}</View>;
};

const AppContent: FC = () => {
  const direction = useSelector((state: AppState) => state.direction);
  return (
    <ThemeProvider themeOverrides={{ ...themeOverrides, direction }}>
      <CSSGlobal>
        <Routes />
      </CSSGlobal>
    </ThemeProvider>
  );
};

export default AppContent;
