import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './saga';
import {RESET_APP} from './actions/loginActions';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['profileReducer', 'loginReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === RESET_APP) {
    persistConfig.storage.removeItem('persist:root');
    newState = undefined;
  }
  return persistedReducer(newState, action);
};
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
