import { Middleware, createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootSaga from 'store/rootSagas';
import rootReducers from 'store/rootReducers';

const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['nightMode'],
};

const _combineReducers = combineReducers({
  ...rootReducers,
});

const sagaMiddleware = createSagaMiddleware();
const reducers = persistReducer(persistConfig, _combineReducers);
const middlewares: Middleware[] = [sagaMiddleware];
if (isDev) {
  middlewares.push(logger);
}

const store = createStore(reducers, undefined, composeEnhancers(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store as any);

export type Reducers = ReturnType<typeof _combineReducers>;

export { store, persistor };
