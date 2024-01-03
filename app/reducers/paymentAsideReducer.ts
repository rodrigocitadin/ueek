import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface paymentAsideState {
  hidden: string,
  data: data
}

interface data {
    name: string,
    email: string,
    phone: string,
    cep: string,
    district: string,
    street: string,
    number: string,
    city: string,
    state: string,
    cpf: string
}

const initialState: paymentAsideState = {
  hidden: 'hidden',
  data: {
    name: '',
    email: '',
    phone: '',
    cep: '',
    district: '',
    street: '',
    number: '',
    city: '',
    state: '',
    cpf: ''
  }
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
    saveData: (state: paymentAsideState, action: PayloadAction<data>) => {
      state.data = action.payload;
      console.log(action.payload);
    }
  }
})

export const { openAside, closeAside, saveData } = paymentAsideSlice.actions;
export default paymentAsideSlice.reducer;
