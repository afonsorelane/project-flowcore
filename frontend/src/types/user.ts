export interface UserType {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'technical';
}
