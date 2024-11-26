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
    var directory;
    let lastDirName = dirNameArray.at(dirNameArray.length - 1)
    for (let dir of this.gitFilesContent.directories) {
      if (dir.nameDirectory.includes(lastDirName!!)) {
        directory = dir;
      }
    }

    if (directory != undefined) this.gitFilesContent = directory
  }

  goBackToPath() {
    if (this.gitFilesContent.nameDirectory == '/') return;
    var path = this.gitFilesContent.nameDirectory
    path = path.startsWith('/') ? path.substring(1) : path;
    path = path.endsWith('/') ? path.substring(0, path.length - 1) : path;
    let pathToFollowArray = path.split("/")!;
    let dirToSearch = this.gitRootDir!;
    for (var a = 0; a < pathToFollowArray.length - 1; a++) {
      for (var e = 0; e < dirToSearch.directories.length; e++) {

        var pathToFollowSubdir = pathToFollowArray.at(a)!;

        var currentSubDirectoryToSearch = dirToSearch.directories.at(e)!.nameDirectory;
        currentSubDirectoryToSearch = currentSubDirectoryToSearch.startsWith('/') ? currentSubDirectoryToSearch.substring(1) : currentSubDirectoryToSearch;
        currentSubDirectoryToSearch = currentSubDirectoryToSearch.endsWith('/') ? currentSubDirectoryToSearch.substring(0, currentSubDirectoryToSearch.length - 1) : currentSubDirectoryToSearch;


        console.log(pathToFollowSubdir + " " + currentSubDirectoryToSearch)

        if (currentSubDirectoryToSearch.includes(pathToFollowSubdir)) {
          dirToSearch = dirToSearch.directories.at(e)!;
          break;
        }
      }
    }

    this.gitFilesContent = dirToSearch
  }
}
