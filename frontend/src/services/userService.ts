import { api } from '../api/axios'; // Make sure this path is correct and the file exists
import type { UserType } from '../types/user';

export const createUser = async (data: UserType) => {
  return await api.post('/register', data);
};
