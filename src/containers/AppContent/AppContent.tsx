import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Routes from 'routes';
import { ThemeOverrides, ThemeProvider } from 'wiloke-react-core';

export const themeOverrides: ThemeOverrides = {
  colors: {
    primary: '#6f9dff',
    secondary: '#2DDE98',
    tertiary: '#fd5678',
    quaternary: '#FFC20E',
    dark1: '#27262B',
    dark2: '#343238',
    dark3: '#75737C',
    dark4: '#929099',
    dark5: '#b6b4b9',
    gray1: '#DBDADE',
    gray2: '#ECEBEE',
    gray3: '#F0F0F2',
    gray4: '#F7F6F9',
  },
  nightModeColors: {
    dark: '#ffffff',
    light: '#1f1e22',
    gray1: '#27262B',
    gray2: '#343238',
    gray3: '#75737C',
    gray4: '#929099',
    gray5: '#b6b4b9',
    dark1: '#F7F6F9',
    dark2: '#F0F0F2',
    dark3: '#ECEBEE',
    dark4: '#DBDADE',
    dark5: '#DBDADE',
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
