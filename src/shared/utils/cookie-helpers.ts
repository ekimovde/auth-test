import Cookies from "js-cookie";

import { CookieExpires } from "@/shared/constants/constants";

export function setCookie(name: string, value: string): void {
  Cookies.set(name, value, { expires: CookieExpires.month });
}

export function getCookie(name: string): string | undefined {
  const cookie = Cookies.get(name) as string | undefined;

  return cookie;
}

export function removeCookie(name: string): void {
  Cookies.remove(name);
}
