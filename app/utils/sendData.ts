import axios from "axios";
import { Data } from "../reducers/paymentAsideReducer";

export async function sendData(data: Data) {
  const user: any = await axios.post('http://localhost:8000/api/user', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const transactionData = {
    user_id: user.data.data.id,
    numbers_id: 1,
    selected_numbers: data.selected_numbers
  }

  await axios.post('http://localhost:8000/api/transaction', transactionData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
