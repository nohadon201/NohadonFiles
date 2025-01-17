import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { HttpServiceService } from "../Services/http/http-service.service";
import { DevelopmentProjectsComponent } from "../main-sections/development-projects/development-projects.component";
import { CodemirrorComponent, CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { DefaultColorParserMap } from "./color-mode-map";

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
  imports: [NgFor, CodemirrorModule, FormsModule, CommonModule],
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
        <ngx-codemirror #codeeditor
          [(ngModel)]="code"
          [options]="codeMirrorOptions">
          </ngx-codemirror>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrl: "./dev-model.css",
  encapsulation: ViewEncapsulation.None // To override the global css values of codemirror, like the size.
})
export class ProjectDisplayComponent {

  public codeMirrorOptions: any = {
    mode: "",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
    theme: "midnight",
  };

  private mapOfExtension: DefaultColorParserMap = new DefaultColorParserMap();

  @ViewChild('codeeditor') private codeEditor: CodemirrorComponent;

  constructor(private httpClient: HttpServiceService) { }

  @Input() projectSelected!: DevProject;

  @Input() code!: string;

  @Input() gitContent!: GitDirectoryInfo;

  @Input() father!: DevelopmentProjectsComponent


  displayFile(path: string) {
    this.codeEditor.codeMirror?.setOption("mode", "text/x-kotlin")
    for (let extension of NOT_READEABLE_FILES) {
      if (path.toLowerCase().includes(extension)) {
        return;
      }
    }
    if (path.includes(".")) {
      var extensionArray = path.split(".")
      var extensionOfFile = extensionArray[extensionArray.length - 1].toLowerCase()
      this.codeEditor.codeMirror?.setOption("mode", this.mapOfExtension.get(extensionOfFile))
    } else {
      this.codeEditor.codeMirror?.setOption("mode", this.mapOfExtension.get(""))
    }
    if (path.includes('&')) {
      path = path.replace("&", "%26")
      console.log(path)
      console.log(path.replace("&", "%26"))
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
