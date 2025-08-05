import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  AuthResponse,
  BaseUrl,
  FormData,
  ResponseUpdateToken,
  ResponseCurrentUser,
} from "../types/Auth";



const api = axios.create({
  withCredentials: true,
  baseURL: BaseUrl[0],
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error: AxiosError) => {
    debugger
 const originalRequest = error.config as AxiosRequestConfig & { _isWorked?: boolean }
    if (error.response?.status === 401 && originalRequest && !originalRequest._isWorked ) {
      originalRequest._isWorked = true;
      const response = await axios.get<ResponseUpdateToken>(
        `${BaseUrl[0]}/refresh-token`,
        { withCredentials: true }
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      return api.request(originalRequest);
    }
    throw error;
  }
);

const rigistration = (
  formDatta: FormData
): Promise<AxiosResponse<AuthResponse>> => {
  return api.post<AuthResponse>("/register", {
    name: formDatta.userName,
    ...formDatta,
  });
};
const login = (formDatta: FormData): Promise<AxiosResponse<AuthResponse>> => {
  return api.post<AuthResponse>("/login", {
    email: formDatta.email,
    password: formDatta.password,
  });
};

const meInfo = (): Promise<AxiosResponse<ResponseCurrentUser>> => {
  return api.get<ResponseCurrentUser>("/me");
};
const logout = (): Promise<void> => {
  return api.delete("/logout");
};

export { rigistration, login, meInfo, logout };
