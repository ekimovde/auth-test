import { AxiosInstance } from "axios";

import {
  LoginRequest,
  LoginResponse,
  ProjectRepository,
  RegisterRequest,
  RegisterResponse,
} from "@/shared/repository/repo";
import { UrlGenerator } from "@/shared/repository/url-generator";

export class HttpRepo implements ProjectRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly urlGenerator: UrlGenerator
  ) {}

  async login(params: LoginRequest): Promise<LoginResponse> {
    const { data } = await this.axios.post<LoginResponse>(
      this.urlGenerator.login(),
      params
    );

    return data;
  }

  async registrer(params: RegisterRequest): Promise<RegisterResponse> {
    const { data } = await this.axios.post<RegisterResponse>(
      this.urlGenerator.register(),
      params
    );

    return data;
  }
}
