import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface numbersState {
  numbers: number[]
  selectedNumbers: number[]
}

const initialState: numbersState = {
  numbers: [],
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
      const index = state.selectedNumbers.indexOf(Number(action));

      state.selectedNumbers.splice(index, 1)
    }
  }
})

export const { addSelectedNumber } = numbersSlice.actions;
export default numbersSlice.reducer;
