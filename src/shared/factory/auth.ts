import { RegisterRequest, LoginRequest } from "../repository/repo";

export const RegisterRequestFactory = (
  params: Partial<RegisterRequest> = {}
): RegisterRequest => {
  return {
    email: params.email ? params.email : "",
    password: params.password ? params.password : "",
    password_confirmation: params.password_confirmation
      ? params.password_confirmation
      : "",
    name: params.name ? params.name : "",
  };
};

export const LoginRequestFactory = (
  params: Partial<LoginRequest> = {}
): LoginRequest => {
  return {
    email: params.email ? params.email : "",
    password: params.password ? params.password : "",
  };
};
