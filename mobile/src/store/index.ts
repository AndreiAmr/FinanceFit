import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import reducers from './rootReducers';
import rootSagas from './rootSagas';
import persistStore from 'redux-persist/es/persistStore';
import { MMKVStorageRedux } from './MMKVStorageRedux';

const sagasMiddleware = createSagaMiddleware();
const middlewares: any[] = [sagasMiddleware];

const persistConfig = {
  key: 'redux',
  storage: MMKVStorageRedux,
  whitelist: [],
  version: 1,
};

const store = createStore(
  persistReducer(persistConfig, reducers),
  applyMiddleware(...middlewares),
);

export type ApplicationDispatch = typeof store.dispatch;

sagasMiddleware.run(rootSagas);

export const persistor = persistStore(store);

export default store;
