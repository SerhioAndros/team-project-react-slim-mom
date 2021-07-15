import storage from 'redux-persist/lib/storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authReducer} from './auth/auth-reducer';
import {dailyCaloryReducer} from './calculator/calculatorReducer';
import {diaryReducer} from './diary/diaryReducers';
import daySummary from './daySummary/daySummaryReducers';
import {appStateReducer} from './appState/appStateReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuthenticated', 'user']
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    diary: diaryReducer,
    daySummary,
    daily: dailyCaloryReducer,
    appState: appStateReducer
  },

  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

const persistor = persistStore(store);

const exportedData = {store, persistor};

export default exportedData;
