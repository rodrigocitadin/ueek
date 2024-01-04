import axios from "axios";

export async function getData() {
  const numbers: any = await axios.get('http://localhost:8000/api/numbers/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return [ 
    [...numbers.data.data.available], 
    [...numbers.data.data.taken] 
  ];
}

