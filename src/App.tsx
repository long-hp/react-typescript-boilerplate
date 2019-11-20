import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './configureStore';
import CounterTest from 'components/CounterTest';
import Demojs from 'components/Demojs';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <div>Test</div>
        <CounterTest />
        <Demojs />
      </PersistGate>
    </Provider>
  );
}

export default App;
