export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  accessToken: string;
  __v: number;
}

export interface UserForAuth {
  username: string;
  email: string;
  id: string;
  accessToken: string;
}
