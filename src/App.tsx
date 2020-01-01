import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import axios from 'axios';
import { store, persistor } from './configureStore';
import configureApp from 'configureApp.json';
import TodolistContainer from 'containers/TodolistContainer/TodolistContainer';
import VideoContainer from 'containers/VideoContainer/VideoContainer';
import Button from 'components/atoms/Button/Button';
import PostTestContainer from 'containers/PostTestContainer/PostTestContainer';
import GridGeneric from 'components/molecules/GridGeneric/GridGeneric';

// Axios defaults
axios.defaults.baseURL = configureApp.baseUrl;
axios.defaults.timeout = configureApp.timeout;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <TodolistContainer />
        <VideoContainer />
        <PostTestContainer />
        <Button className="aaa" style={{ margin: 0 }}>
          aaa
        </Button>
        <GridGeneric
          data={[
            { id: 'id1', name: 'foo' },
            { id: 'id2', name: 'bar' },
          ]}
          renderItem={item => {
            return <div>{item.name}</div>;
          }}
        />
      </PersistGate>
    </Provider>
  );
}

export default App;
