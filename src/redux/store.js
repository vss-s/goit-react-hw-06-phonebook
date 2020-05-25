import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

// code below need to solve problem with 'A non-serializable value'
// link to issue https://github.com/rt2zz/redux-persist/issues/988

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: ['persist/PERSIST'],
  },
};

const middleware = [...getDefaultMiddleware(defaultMiddlewareConfig)];

///////////////

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
