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
    light: '#ffffff',
    gray1: '#F7F6F9',
    gray2: '#F0F0F2',
    gray3: '#ECEBEE',
    gray4: '#DBDADE',
    gray5: '#b6b4b9',
    gray6: '#929099',
    gray7: '#75737C',
    gray8: '#343238',
    gray9: '#27262B',
    dark: '#131314',
  },
  nightModeColors: {
    light: '#1e1d20',
    gray1: '#27262B',
    gray2: '#343238',
    gray3: '#75737C',
    gray4: '#929099',
    gray5: '#b6b4b9',
    gray6: '#DBDADE',
    gray7: '#ECEBEE',
    gray8: '#F0F0F2',
    gray9: '#F7F6F9',
    dark: '#ffffff',
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
