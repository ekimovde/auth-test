export interface AuthTab {
  id: number;
  label: AuthTabLabel;
  value: AuthTabValue;
  isActive: boolean;
}

export enum AuthTabLabel {
  login = "Авторизация",
  register = "Регистрация",
}

export enum AuthTabValue {
  login = "login",
  register = "register",
}
