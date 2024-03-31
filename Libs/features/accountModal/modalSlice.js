import { createSlice } from "@reduxjs/toolkit";

const initialState = { modalOpened: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal(state) {
      state.modalOpened = true;
    },
    closeModal(state) {
      state.modalOpened = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
