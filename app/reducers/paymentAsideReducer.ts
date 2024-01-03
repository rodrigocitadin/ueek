import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface paymentAsideState {
  hidden: string
}

const initialState: paymentAsideState = {
  hidden: 'hidden'
}

const paymentAsideSlice = createSlice({
  name: 'paymentAside',
  initialState,
  reducers: {
    openAside: (state: paymentAsideState) => {
      state.hidden = '';
    },
    closeAside: (state: paymentAsideState) => {
      state.hidden = 'hidden';
    },
  }
})

export const { openAside, closeAside } = paymentAsideSlice.actions;
export default paymentAsideSlice.reducer;
