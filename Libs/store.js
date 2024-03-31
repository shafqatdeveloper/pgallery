import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/accountModal/modalSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      accountModal: modalSlice,
    },
  });
};
