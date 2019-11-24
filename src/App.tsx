import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import axios from 'axios';
import { store, persistor } from './configureStore';
import configureApp from 'configureApp.json';
import TodolistContainer from 'containers/TodolistContainer/TodolistContainer';

// Axios defaults
axios.defaults.baseURL = configureApp.baseUrl;
axios.defaults.timeout = configureApp.timeout;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <TodolistContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
