import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-reducer";
import { dailyCaloryReducer } from "./calculator/calculatorReducer";
import { diaryReducer } from "./diary/diaryReducers";
import {
 persistStore,
 persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    diary: diaryReducer,
    daily: dailyCaloryReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

const exportedData = { store, persistor };

export default exportedData;
