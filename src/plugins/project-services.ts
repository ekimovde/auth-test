import { App } from "vue";

import createProjectServices from "@/shared/repository/services-factory";
import { initializeProjectServices } from "@/shared/repository/initialize-project-services";

const projectServicesPlugin = {
  install: (app: App) => {
    const projectServicesInstance = createProjectServices(app);

    initializeProjectServices(projectServicesInstance);

    app.config.globalProperties.$projectServices = projectServicesInstance;
  },
};

export default projectServicesPlugin;
