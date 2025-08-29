import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { reduxStorage } from '../../services/config/useMMKV';
import { carSlice } from '../Slices';

const rootReducer = combineReducers({
  carSlice: carSlice,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['carSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({
          serializableCheck: false,
        })
      : getDefaultMiddleware(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
