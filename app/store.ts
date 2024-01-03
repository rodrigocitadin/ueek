import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from "./numbersReducer";
import paymentAsideReducer from "./paymentAsideReducer";
import asideReducer from "./reducers/asideReducer";

const store = configureStore({
  reducer: {
    numbers: numbersReducer,
    paymentAside: paymentAsideReducer,
    aside: asideReducer
  }
});

export default store;
