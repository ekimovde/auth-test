import { App } from "vue";
import axios from "axios";

import { initializeAxios } from "@/shared/repository/initialize-axios";
import { getBearerToken } from "@/shared/utils/token-helpers";

const axiosPlugin = {
  install: (app: App) => {
    const $axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });

    initializeAxios($axios);

    $axios.interceptors.request.use((config) => {
      config.headers.Authorization = getBearerToken();
      config.headers["X-API-Key"] = process.env["VUE_APP_X-API-Key"];

      return config;
    });

    $axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const { response } = error;

        const { data } = response;

        return Promise.reject(data);
      }
    );

    app.config.globalProperties.$axios = $axios;
  },
};

export default axiosPlugin;
