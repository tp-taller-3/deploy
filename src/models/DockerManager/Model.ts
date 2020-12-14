import { SSHManager, Shell } from "../index";
import { IRepository } from "../../config";

export class DockerManager {
  private readonly sshAddress: string;
  private readonly containerName: string;
  private readonly repositoryConfig: IRepository;

  constructor({ sshAddress, containerName, repositoryConfig }: IDockerManagerAttributes) {
    this.containerName = containerName;
    this.sshAddress = sshAddress;
    this.repositoryConfig = repositoryConfig;
  }

  public dbMigrate() {
    const dockerCommand = `docker exec ${this.containerName} yarn db:migrate`;
    return Shell.execute({ command: `${this.sshCommand()} ${dockerCommand}` });
  }

  public dockerComposeUp() {
    const { location } = this.repositoryConfig;
    const command = `${this.sshCommand()} 'cd ${location} && docker-compose up -d --build'`;
    return Shell.execute({ command, label: "building container" });
  }

  public createDatabase() {
    const command = `${this.sshCommand()} docker exec ${this.containerName} yarn db:create`;
    return Shell.execute({ command, label: "Creating database" });
  }

  public removeDanglingImages() {
    const danglingImages = this.retrieveDanglingImages();
    if (danglingImages.length === 0) return;
    const command = `${this.sshCommand()} 'docker rmi $(${this.danglingImagesCommand()})'`;
    return Shell.execute({ command, label: "Removing dangling containers" });
  }

  private retrieveDanglingImages() {
    const command = `${this.sshCommand()} '${this.danglingImagesCommand()}'`;
    return Shell.execute({ command });
  }

  private danglingImagesCommand() {
    return "docker images -f \"dangling=true\" -q";
  }

  private sshCommand() {
    return `${SSHManager.command(this.sshAddress)}`;
  }
}

interface IDockerManagerAttributes {
  repositoryConfig: IRepository;
  sshAddress: string;
  containerName: string;
}
