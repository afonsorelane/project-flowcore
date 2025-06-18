import api from "./axiosInstance";

export async function updateDocumentStatus(id: string, status: string) {
  try {
    const response = await api.patch(`http://localhost:3003/request/${id}/status`, { status });
    return response;
  } catch (error: any) {
    return error;
  }
}