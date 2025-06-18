import api from "./axiosInstance";


export async function createUser({
  data,
}: {
  data: { name: string; email: string; role: string };
}) {
  try {
    const response = await api.post("http://localhost:3003/register", data);
   
    return response;
  } catch (error: any) {
    return error;
  }
}