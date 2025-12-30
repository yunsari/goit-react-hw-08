import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

import { authReducer } from "./auth/slice";
import { filtersReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filters: filtersReducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
