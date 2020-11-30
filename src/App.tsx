import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppContent } from 'containers/AppContent';
import { store, persistor } from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

export default App;
