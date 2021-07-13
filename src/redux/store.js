import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import notificationReducer from "./notification/notificationReducer";
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
import storage from "redux-persist/lib/storage";

// import contactsReducer from "./contacts/contacts-reducer";
// import authReducer from "./auth/auth-reducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "refreshToken", "sid"],
};

const store = configureStore({
  reducer: {
    // notification: notificationReducer,
    // user: userReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// const persistor = persistStore(store);

// const exportedData = { store, persistor };

export default store;
