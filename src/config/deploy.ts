import { Environment } from "./Environment";
import { InvalidNodeEnvVariableError } from "../models/Errors";

export const DeployConfig = {
  production: {
    hostname: "bolsadetrabajo.fi.uba.ar",
    frontendPath: "/",
    sshAddress: "sebastian@sebastian",
    user: "sebastian"
  },
  staging: {
    hostname: "antiguos.fi.uba.ar",
    frontendPath: "/course-admin",
    sshAddress: "course-admin@antiguos.fi.uba.ar",
    user: "course-admin"
  },
  test: {
    hostname: "test.fi.uba.ar",
    frontendPath: "/test",
    sshAddress: "test@antiguos.fi.uba.ar",
    user: "test"
  }
}[Environment.NODE_ENV()];

if (DeployConfig === undefined) throw new InvalidNodeEnvVariableError();
