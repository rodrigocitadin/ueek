import { configureStore } from "@reduxjs/toolkit";
import numbersReducer from "./numbersReducer";

const store = configureStore({
  reducer: {
    numbers: numbersReducer
  }
});

export default store;
