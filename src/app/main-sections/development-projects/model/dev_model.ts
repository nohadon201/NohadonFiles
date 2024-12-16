import { Component, Input } from "@angular/core";
import { NgFor } from "@angular/common";
import { HttpServiceService } from "../../../Services/http/http-service.service";
import { DevelopmentProjectsComponent } from "../development-projects.component";

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
  constructor(public nameDirectory: string, public files: Array<GitFileInfo>, public directories: Array<GitDirectoryInfo>) { }
}


@Component({
  standalone: true,
  imports: [NgFor],
  template: `
<div id="displayer" class="no-content">
  <div id="project_info">
    <h1>{{projectSelected.title}}</h1>
    <p>{{projectSelected.description}}</p>
    <a (click)="this.father.goBackToPath()" id="back">\uf104</a><label>Current Directory: <span class="blue">{{gitContent.nameDirectory}}</span></label>
    <div id="repo_project_displayer">
      <ul id="tree">
        <li *ngFor="let dir of gitContent.directories" (click)="father.displayDirectory(dir.nameDirectory)" class="dir">
          {{dir.nameDirectory}}
        </li>
        <li *ngFor="let file of gitContent.files" (click)="displayFile(file.url)" class="{{getClass(file.title)}}">
          {{file.title}}
        </li>
      </ul>
      <div id="code">
        <pre><code>{{code}}</code></pre>
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
    console.log(path)
    this.httpClient.getText('http://localhost:8080/gitContent/readFile?projectName=' + this.projectSelected?.githubProjectName + '&filePath=' + path)
      .then((value) => {
        this.code = value
      });
  }

  getClass(fileName: string): string {
    fileName = fileName.substring(fileName.lastIndexOf('.') + 1)
    return fileName;
  }
}
