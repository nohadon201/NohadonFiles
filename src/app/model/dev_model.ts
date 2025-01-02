import { Component, Input } from "@angular/core";
import { NgFor } from "@angular/common";
import { HttpServiceService } from "../Services/http/http-service.service";
import { DevelopmentProjectsComponent } from "../main-sections/development-projects/development-projects.component";

const DEFAULT_ICON = "";
const NOT_READEABLE_FILES = ["ico", "jpg", "mp3", "mp4", ".vscode", "png", ".editorconfig"]

export class DevProject {
  constructor(
    public id: number,
    public title: string = "",
    public subTitle: string = "",
    public languages: string = "",
    public inProgress: boolean = true,
    public icon: string = DEFAULT_ICON,
    public color: string = "purple",
    public description: string = ""
  ) { }
}

class GitFileInfo {
  constructor(public title: string, public url: string, public size: number) { }
}

export class GitDirectoryInfo {
  constructor(public nameDirectory: string, public fullPath: string, public files: Array<GitFileInfo>, public directories: Array<GitDirectoryInfo>) { }
}


@Component({
  standalone: true,
  imports: [NgFor],
  template: `
<div id="displayer" class="no-content">
  <div id="project_info">
    <img (click)="this.father.exitProjectContent()" src="resources/images/icons/close.png" style="width:30px; height:30px margin:10px;">
    <h1>{{projectSelected.title}}</h1>
    <p>{{projectSelected.description}}</p>
    <a (click)="this.father.goBackToPath()" id="back">\uf104</a><label>Current Directory: <span class="blue">{{gitContent.fullPath}}</span></label>
    <div id="repo_project_displayer">
      <ul id="tree">
        <li *ngFor="let dir of gitContent.directories" (click)="father.displayDirectory(dir.fullPath)" class="dir">
          {{dir.nameDirectory}}
        </li>
        <li *ngFor="let file of gitContent.files" (click)="displayFile(file.url)" class="{{getClass(file.title)}}">
          {{file.title}}
        </li>
      </ul>
      <div id="code">
        <code>{{code}}</code>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrl: "./dev-model.css"
})
export class ProjectDisplayComponent {

  constructor(private httpClient: HttpServiceService) { }

  @Input() projectSelected!: DevProject;

  @Input() code!: string;

  @Input() gitContent!: GitDirectoryInfo;

  @Input() father!: DevelopmentProjectsComponent

  displayFile(path: string) {
    for (let extension of NOT_READEABLE_FILES) {
      if (path.toLowerCase().includes(extension)) {
        return;
      }
    }
    this.httpClient.getText('http://localhost:8080/gitContent/readFile?id=' + this.projectSelected?.id + '&filePath=' + path)
      .then((value) => {
        this.code = value
      });
  }

  getClass(fileName: string): string {
    fileName = fileName.substring(fileName.lastIndexOf('.') + 1)
    return fileName;
  }
}
