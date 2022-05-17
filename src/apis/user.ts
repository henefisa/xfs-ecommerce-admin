import { AxiosResponse } from "axios";
import { instance } from ".";
import { UserResponse } from "../models";

export const getUsers = (): Promise<AxiosResponse<UserResponse[]>> => {
  return instance.get("/user");
};

export const getUserById = (
  id: string
): Promise<AxiosResponse<UserResponse>> => {
  return instance.get(`/user/${id}`);
};
