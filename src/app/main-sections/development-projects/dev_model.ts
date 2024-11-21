
const DEFAULT_ICON = "";

export class DevProject {
  constructor(
    public id: number,
    public title: string = "",
    public languages: string = "",
    public inProgress: boolean = true,
    public icon: string = DEFAULT_ICON,
    public color: string = "purple",
    public githubProjectName: string = "",
    public description: string = ""
  ) { }
}
class GitFileInfo {
  constructor(public title: string, public url: string, public size: number) { }
}

export class GitDirectoryInfo {
  constructor(public files: Array<GitFileInfo>, public directories: Array<GitDirectoryInfo>) { }
}

