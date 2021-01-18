import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getUseDispatchRedux } from 'wiloke-react-core/utils';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'wiloke-react-core';
import { themeOverrides, CSSGlobal } from 'containers/AppContent/AppContent';

getUseDispatchRedux(useDispatch);
import { store, persistor } from 'store/configureStore';

const AppContent: FC = ({ children }) => {
  const nightMode = useSelector((state: AppState) => state.nightMode);
  const direction = useSelector((state: AppState) => state.direction);
  return (
    <ThemeProvider themeOverrides={{ ...themeOverrides, nightMode, direction }}>
      <CSSGlobal>
        <MemoryRouter>{children}</MemoryRouter>
      </CSSGlobal>
    </ThemeProvider>
  );
};

const withThemeContext = storyFn => (
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <AppContent>
        <MemoryRouter>{storyFn()}</MemoryRouter>
      </AppContent>
    </PersistGate>
  </Provider>
);

addDecorator(withThemeContext);

addDecorator(withKnobs);

addParameters({
  options: {
    showRoots: true,
  },
});
