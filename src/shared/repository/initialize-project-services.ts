import { ProjectServices } from "@/shared/repository/repo";

let $projectServices: ProjectServices;

export function initializeProjectServices(
  projectServicesInstance: ProjectServices
): void {
  $projectServices = projectServicesInstance;
}

export { $projectServices };
