import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./app/GlobalRedux";

export const store = configureStore({
  reducer: rootReducer,
});
