import axios from 'axios';

export async function createUser(data: { name: string; email: string; role: string }) {
  const token = localStorage.getItem('token'); // ou de onde você armazena o token
  return axios.post(
    'http://localhost:3003/register',
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}