import api from "./axiosInstance";


export async function getMe() {
  try {
    const response = await api.get("http://localhost:3003/users/me");
    return response;
  } catch (error: any) {
    return error;
  }
}

export async function getMyRequest() {
  try {
    const response = await api.get("http://localhost:3003/request/all");
    return response;
  } catch (error: any) {
    return error;
  }
}


export async function getAllRequest() {
  try {
    const response = await api.get("http://localhost:3003/request/allrequests");
    return response;
  } catch (error: any) {
    return error;
  }
}