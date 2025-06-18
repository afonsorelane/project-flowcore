import api from "./axiosInstance";

export async function createDocument(data: { category: string; fileUrl: string; note?: string }) {
  try {
    const response = await api.post("http://localhost:3003/request", data);
    return response;
  } catch (error: any) {
    return error;
  }
}