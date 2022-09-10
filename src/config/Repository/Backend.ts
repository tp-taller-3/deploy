import { Environment } from "../Environment";
import { InvalidNodeEnvVariableError } from "../../models/Errors";

export const BackendConfig = {
  production: {
    containerName: "fiuba-course-admin-backend",
    gitRepository: {
      url: "https://github.com/fiuba-course-admin/back-end.git",
      location: "~/fiuba-course-admin/back-end",
      branch: "production"
    }
  },
  staging: {
    containerName: "fiuba-course-admin-backend",
    gitRepository: {
      url: "https://github.com/fiuba-course-admin/back-end.git",
      location: "~/fiuba-course-admin/back-end",
      branch: "staging"
    }
  },
  test: {
    containerName: "containerName",
    gitRepository: {
      url: "https://github.com/organization-name/repository-name.git",
      location: "./directory",
      branch: "master"
    }
  }
}[Environment.NODE_ENV()];

if (BackendConfig === undefined) throw new InvalidNodeEnvVariableError();
