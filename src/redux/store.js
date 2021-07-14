import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authReducer} from './auth/auth-reducer';
import storage from "redux-persist/lib/storage";
import { diaryReducer } from './diary/diaryReducers';
// import errorReducer from "./error/errorReducer";
// import loaderReducer from "./loader/loaderReducer";
// import dateReducer from "./calendar/calendarReducer";
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
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    diary: diaryReducer,
    
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

// const exportedData = { store, persistor };

export default persistor;
