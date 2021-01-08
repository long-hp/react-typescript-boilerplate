import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Routes from 'routes';
import { ThemeOverrides, ThemeProvider } from 'wiloke-react-core';

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
    devMode: false,
  },
};

const AppContent: FC = () => {
  const nightMode = useSelector((state: AppState) => state.nightMode);
  const direction = useSelector((state: AppState) => state.direction);
  return (
    <ThemeProvider themeOverrides={{ ...themeOverrides, nightMode, direction }}>
      <Routes />
    </ThemeProvider>
  );
};

export default AppContent;
