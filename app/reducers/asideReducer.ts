import { createSlice } from "@reduxjs/toolkit";

export interface asideState {
  blur: string,
  paymentBlur: string,
}

const initialState: asideState = {
  blur: '',
  paymentBlur: '',
}

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    blurBg: (state: asideState) => {
      state.blur = 'blur-sm pointer-events-none';
    },
    blurBgInPayment: (state: asideState) => {
      state.paymentBlur = 'blur-sm pointer-events-none';
      state.blur = 'blur-sm pointer-events-none';
    },
    removeBlurBg: (state: asideState) => {
      state.blur = '';
      state.paymentBlur = '';
    },
  }
})

export const { blurBg, removeBlurBg, blurBgInPayment } = asideSlice.actions;
export default asideSlice.reducer;
