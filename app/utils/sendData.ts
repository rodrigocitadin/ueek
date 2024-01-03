import axios, { AxiosError } from "axios";
import { Data } from "../reducers/paymentAsideReducer";

export async function sendData(data: Data) {
  try {
    const user: any = await axios.post('http://localhost:8000/api/user', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(user);

    try {
      const transactionData = {
        user_id: user.data.data.id,
        numbers_id: 1,
        selected_numbers: data.selected_numbers
      }

      const transaction: any = await axios.post('http://localhost:8000/api/transaction', transactionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log('Resposta do servidor:', user.data);

      return {
        user: user,
        transaction: transaction
      }

    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Erro ao fazer a solicitação POST:', axiosError.message);
      console.error('Código de status:', axiosError.response?.status);

      // Adicione esta parte para ver a resposta detalhada do servidor
      console.error('Detalhes da resposta:', axiosError.response?.data);
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Erro ao fazer a solicitação POST:', axiosError.message);
    console.error('Código de status:', axiosError.response?.status);

    // Adicione esta parte para ver a resposta detalhada do servidor
    console.error('Detalhes da resposta:', axiosError.response?.data);
  }
}
