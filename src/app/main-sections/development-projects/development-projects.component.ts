import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgComponentOutlet, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DevProject, GitDirectoryInfo, ProjectDisplayComponent } from './model/dev_model';
import { HttpServiceService } from '../../Services/http/http-service.service';


@Component({
  standalone: true,
  imports: [NgFor, CommonModule, ProjectDisplayComponent, NgComponentOutlet],
  selector: 'app-development-projects',
  templateUrl: './development-projects.component.html',
  styleUrl: './development-projects.component.css'
})
export class DevelopmentProjectsComponent {

  public projects: DevProject[] = [];

  public gitFilesContent: GitDirectoryInfo = new GitDirectoryInfo("/", [], []);

  public gitRootDir: GitDirectoryInfo = new GitDirectoryInfo("/", [], []);

  public projectSelected: DevProject = new DevProject(-1, "Not Loaded", "", false, "", "", "", "");

  public code: string = "";


  constructor(private httpClient: HttpServiceService) {
    this.httpClient.getAllItems<DevProject>('http://localhost:8080/projects/getAll')
      .then((value) => {
        this.projects = value
      });
  }

  get ProjectDisplayType() { return ProjectDisplayComponent }

  getProject(project: DevProject) {
    this.projectSelected = project;
    document.getElementById("container")?.classList.toggle("no-content")
    document.getElementById("loader-container")?.classList.toggle("no-content")
    this.httpClient.getItem<GitDirectoryInfo>('http://localhost:8080/projects/getProject?projectName=' + project.githubProjectName)
      .then((value) => {
        this.gitRootDir = value
        this.gitFilesContent = value
        document.getElementById("loader-container")?.classList.toggle("no-content")
        document.getElementById("displayer")?.classList.toggle("no-content")
      });
  }

  displayDirectory(path: string) {
    path = path.startsWith('/') ? path.substring(1) : path;
    path = path.endsWith('/') ? path.substring(0, path.length - 1) : path;
    let dirNameArray = path.split("/");
    let lastDirName = dirNameArray.at(dirNameArray.length - 1)
    var directory;
    for (let dir of this.gitFilesContent.directories) {
      if (dir.nameDirectory.includes(lastDirName!!)) {
        directory = dir;
      }
    }
    if (directory != undefined) this.gitFilesContent = directory
    console.log(directory)
  }
}
