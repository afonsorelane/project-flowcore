
import axios from "axios";


export async function login({
  data,
}: {
  data: { email: string; password: string };
}) {
  try {
    const response = await axios.post("http://localhost:3003/login", data);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("session", JSON.stringify(response.data.user));
    return response;
  } catch (error: any) {
    //console.log(error);
    return error;
  }
}


export async function logout() {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Logout failed" };
  }
}