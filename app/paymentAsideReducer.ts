import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface paymentAsideState {
  is_open: boolean
}

const initialState: paymentAsideState = {
  is_open: false
}

const paymentAsideSlice = createSlice({
  name: 'paymentAside',
  initialState,
  reducers: {
    toggleAside: (state: paymentAsideState) => {
      state.is_open = !state.is_open;
    },
  }
})

export const { toggleAside } = paymentAsideSlice.actions;
export default paymentAsideSlice.reducer;
