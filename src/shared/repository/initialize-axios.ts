import { AxiosInstance } from "axios";

let $axios: AxiosInstance;

export function initializeAxios(axiosInstance: AxiosInstance): void {
  $axios = axiosInstance;
}

export { $axios };
