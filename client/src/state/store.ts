// state/store.ts
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./index"; // your globalSlice
import { api } from "./api";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,  // RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
