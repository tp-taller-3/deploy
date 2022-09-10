import { Environment } from "../Environment";
import { InvalidNodeEnvVariableError } from "../../models/Errors";

export const FrontendConfig = {
  production: {
    publicUrl: "https://bolsadetrabajo.fi.uba.ar/",
    gitRepository: {
      url: "https://github.com/fiuba-course-admin/front-end.git",
      location: "./fiuba-course-admin/front-end",
      branch: "production"
    }
  },
  staging: {
    publicUrl: "http://antiguos.fi.uba.ar/course-admin",
    gitRepository: {
      url: "https://github.com/fiuba-course-admin/front-end.git",
      location: "./fiuba-course-admin/front-end",
      branch: "staging"
    }
  },
  test: {
    publicUrl: "http://test.fi.uba.ar/course-admin",
    gitRepository: {
      url: "https://github.com/organization-name/repository-name.git",
      location: "./directory",
      branch: "master"
    }
  }
}[Environment.NODE_ENV()];

if (FrontendConfig === undefined) throw new InvalidNodeEnvVariableError();
