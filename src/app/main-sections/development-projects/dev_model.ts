
const DEFAULT_ICON = "";

export class DevProject {
  constructor(
    public id: number,
    public title: string = "",
    public languages: string = "",
    public inProgress: boolean = true,
    public icon: string = DEFAULT_ICON,
    public color: string = "purple",
    public githubUrl: string = ""
  ) { }
}
class FileInfo {
  constructor(public title: string, public url: string, public size: number) { }
}

export class DirectoryInfo {
  constructor(public files: Array<FileInfo>, public directories: Array<DirectoryInfo>) { }
}

