import { ResponseMessage } from "@/shared/constants/constants";

export interface ProjectRepository {
  login(params: LoginRequest): Promise<LoginResponse>;
  registrer(params: RegisterRequest): Promise<RegisterResponse>;
}

export interface ProjectUrlGenerator {
  login(): string;
  register(): string;
}

export interface ProjectServices {
  projectRepository: ProjectRepository;
  projectUrlGenerator: ProjectUrlGenerator;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  access_token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
}

export interface RegisterResponse {
  message: ResponseMessage;
  user: User;
  customer: {
    id: number;
    user_id: number;
    updated_at: Date;
    created_at: Date;
  };
  profile: {
    id: number;
    customer_id: number;
    first_name: string;
    last_name: string | null;
    updated_at: Date;
    created_at: Date;
  };
  access_token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}
