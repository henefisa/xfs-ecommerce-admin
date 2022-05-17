import { Base } from "./Base";

export interface User {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthday: Date;
  stripeCustomerId: string;
  roles: string[];
  status: string;
}

export interface UserResponse extends User, Base {}
