
const DEFAULT_ICON = "";

export class DevProject {
  constructor(
    public id: number,
    public title: string = "",
    public languages: string = "",
    public inProgress: boolean = true,
    public icon: string = DEFAULT_ICON,
    public color: string = "purple",
  ) { }
}

export class DevRepo {
  public projects: Array<DevProject> = new Array<DevProject>();
}

