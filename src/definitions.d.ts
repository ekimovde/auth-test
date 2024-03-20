import { ProjectServices } from "@/shared/repository/repo";
import { AxiosInstance } from "axios";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    b: Block;
    $projectServices: ProjectServices;
    $axios: AxiosInstance;
  }
}

interface Block {
  (element?: string, mods?: ModsType | null): string;
  (mods?: ModsType): string;
}

interface ModsType {
  [key: string]: boolean | string | number | undefined;
}
