import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface numbersState {
  numbers: number[][]
  selectedNumbers: number[],
  price: number
}

const initialState: numbersState = {
  numbers: [
    [],
    []
  ],
  selectedNumbers: [],
  price: 5.0
}

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    addSelectedNumber: (state: numbersState, action: PayloadAction<number>) => {
      state.selectedNumbers.push(action.payload);
    },

    removeSelectedNumber: (state: numbersState, action: PayloadAction<number>) => {
      state.selectedNumbers.splice(Number(action.payload), 1)
    }
  }
})

export const { addSelectedNumber, removeSelectedNumber } = numbersSlice.actions;
export default numbersSlice.reducer;
