import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './configureStore';
import TodolistContainer from 'containers/TodolistContainer/TodolistContainer';
import VideoContainer from 'containers/VideoContainer/VideoContainer';
import Button from 'components/Button/Button';
import PostTestContainer from 'containers/PostTestContainer/PostTestContainer';
import GridGeneric from 'components/GridGeneric/GridGeneric';
import FuncComp from 'components/FuncComp/FuncComp';

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

        <h2>Grid generic type</h2>
        <GridGeneric
          data={[
            { id: 'id1', name: 'foo' },
            { id: 'id2', name: 'bar' },
          ]}
          renderItem={item => {
            return <div>{item.name}</div>;
          }}
        />
        <h2>Function commponent</h2>
        <FuncComp title="title" text="function component text" />
      </PersistGate>
    </Provider>
  );
}

export default App;
