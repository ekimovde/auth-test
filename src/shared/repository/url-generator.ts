import { ProjectUrlGenerator } from "@/shared/repository/repo";

export enum ApiRoutes {
  login = "/login",
  register = "/register",
}

export class UrlGenerator implements ProjectUrlGenerator {
  login(): string {
    return ApiRoutes.login;
  }

  register(): string {
    return ApiRoutes.register;
  }
}
