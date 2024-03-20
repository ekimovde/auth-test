import { App } from "vue";

import { HttpRepo } from "./http-repo";
import { ProjectServices } from "./repo";
import { UrlGenerator } from "./url-generator";

export default function createProjectServices(context: App): ProjectServices {
  const { $axios } = context.config.globalProperties;

  const projectUrlGenerator = new UrlGenerator();

  const projectRepository = new HttpRepo($axios, projectUrlGenerator);

  return {
    projectUrlGenerator,
    projectRepository,
  };
}
