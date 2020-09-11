import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Routes from 'routes';
import { store, persistor } from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
