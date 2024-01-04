import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sendData } from "../utils/sendData";

export interface PaymentAsideState {
  hidden: string,
  data: Data
}

export interface Data {
  name: string,
  email: string,
  phone: string,
  cpf: string,
  address: {
    cep: string,
    district: string,
    street: string,
    number: string,
    city: string,
    state: string,
  },
  selected_numbers: number[],
  numbers_id: number
}

const initialState: PaymentAsideState = {
  hidden: 'hidden',
  data: {
    name: '',
    email: '',
    phone: '',
    cpf: '',
    address: {
      cep: '',
      district: '',
      street: '',
      number: '',
      city: '',
      state: '',
    },
    selected_numbers: [],
    numbers_id: 1
  }
}

const paymentAsideSlice = createSlice({
  name: 'paymentAside',
  initialState,
  reducers: {
    openAside: (state: PaymentAsideState) => {
      state.hidden = '';
    },
    closeAside: (state: PaymentAsideState) => {
      state.hidden = 'hidden';
    },
    saveData: (state: PaymentAsideState, action: PayloadAction<Data>) => {
      state.data = action.payload;
      sendData(state.data);
      // console.log(action.payload);
    }
  }
})

export const { openAside, closeAside, saveData } = paymentAsideSlice.actions;
export default paymentAsideSlice.reducer;
