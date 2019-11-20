import {
  Middleware,
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
  // loadTranslations,
  // syncTranslationWithStore,
  i18nReducer,
  // setLocale
} from 'react-redux-i18n';
import rootSaga from './sagas';
import rootReducers from './reducers';

const isDev = process.env.NODE_ENV === 'development';
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const _combineReducers = combineReducers({
  ...rootReducers,
  i18n: i18nReducer,
});

const sagaMiddleware = createSagaMiddleware();
const reducers = persistReducer(persistConfig, _combineReducers);
const middlewares: Middleware[] = [sagaMiddleware];
if (isDev) {
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
// if (window.translations) {
//   syncTranslationWithStore(store);
//   // store.dispatch(loadTranslations(window.translations));
//   // store.dispatch(setLocale("en"));
// }

export type Reducers = ReturnType<typeof _combineReducers>;

export { store, persistor };
