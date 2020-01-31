import { createStore, applyMiddleware, compose  } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { offlineMiddleware, suspendSaga,  consumeActionMiddleware} from "redux-offline-queue";
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from "./ducks"
import rootSaga from "./sagas"

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const store = createStore(persistedReducer, 
  applyMiddleware(...middlewares)
  );

sagaMiddleware.run(rootSaga);


export default () => {  
  let persistor = persistStore(store);
  return { store, persistor }
}