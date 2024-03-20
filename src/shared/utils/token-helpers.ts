import { getCookie } from "./cookie-helpers";

import { LocalStorageName } from "@/shared/constants/constants";

export function getBearerToken(): string {
  const token = getCookie(LocalStorageName.token);

  return token ? `Bearer ${token}` : "";
}
