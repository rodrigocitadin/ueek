import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface numbersState {
  numbers: number[]
  selectedNumbers: number[]
}

const initialState: numbersState = {
  numbers: [...Array(80)].map((_, i) => 1 + i++),
  selectedNumbers: [],
}

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    addSelectedNumber: (state: numbersState, action: PayloadAction<number>) => {
      state.selectedNumbers.push(action.payload);
    },

    removeSelectedNumber: (state: numbersState, action: PayloadAction<number>) => {
      state.selectedNumbers.splice(Number(action), 1)
    }
  }
})

export const { addSelectedNumber, removeSelectedNumber } = numbersSlice.actions;
export default numbersSlice.reducer;
