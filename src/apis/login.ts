import { AxiosResponse } from "axios";
import { instance } from ".";

export const login = (
  username: string,
  password: string
): Promise<AxiosResponse<{ accessToken: string }>> => {
  return instance.post("/login", { username, password });
};
