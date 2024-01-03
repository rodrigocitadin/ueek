import { createSlice } from "@reduxjs/toolkit";

export interface asideState {
  blur: string
}

const initialState: asideState = {
  blur: ''
}

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    blurBg: (state: asideState) => {
      state.blur = 'blur-sm';
    },
    removeBlurBg: (state: asideState) => {
      state.blur = '';
    },
  }
})

export const { blurBg, removeBlurBg} = asideSlice.actions;
export default asideSlice.reducer;
