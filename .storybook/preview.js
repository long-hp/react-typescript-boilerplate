import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router-dom';
import '!style-loader!css-loader!sass-loader!styles/main.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getUseDispatchRedux } from 'wiloke-react-core/utils';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'wiloke-react-core';
import { themeOverrides } from 'containers/AppContent/AppContent';

getUseDispatchRedux(useDispatch);
import { store, persistor } from 'store/configureStore';

const withThemeContext = storyFn => (
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <ThemeProvider themeOverrides={themeOverrides}>
        <MemoryRouter>{storyFn()}</MemoryRouter>
      </ThemeProvider>
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
