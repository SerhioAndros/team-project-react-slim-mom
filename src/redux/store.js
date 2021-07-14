import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
 // persistStore,
 // persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import contactsReducer from "./contacts/contacts-reducer";
import { authReducer } from "./auth/auth-reducer";
import { dailyCaloryReducer } from "./calculator/calculatorReducer";
import { diaryReducer } from "./diary/diaryReducers";

// const authPersistConfig = {
//   key: "authToken",
//   storage,
//   whitelist: ["token"],
// };

const store = configureStore({
 reducer: {
  // user: userReducer,
  auth: authReducer,
  diary: diaryReducer,
  daily: dailyCaloryReducer,
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
