import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from "./numbersReducer";
import paymentAsideReducer from "./paymentAsideReducer";

const store = configureStore({
  reducer: {
    numbers: numbersReducer,
    paymentAside: paymentAsideReducer
  }
});

export default store;
