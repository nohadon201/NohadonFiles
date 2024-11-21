import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DevProject, GitDirectoryInfo } from './dev_model';
import { HttpServiceService } from '../../Services/http/http-service.service';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule],
  selector: 'app-development-projects',
  templateUrl: './development-projects.component.html',
  styleUrl: './development-projects.component.css'
})


export class DevelopmentProjectsComponent {

  public projects: DevProject[] = [];

  public currentProject: GitDirectoryInfo | null;

  public currentProjectDisplayed: DevProject | null;

  public code: string = "";

  @ViewChild('container', { static: false }) container: ElementRef;

  constructor(private httpClient: HttpServiceService) {
    this.httpClient.getAllItems<DevProject>('http://localhost:8080/projects/getAll')
      .then((value) => {
        this.projects = value
      });
  }

  displayProject(project: DevProject) {
    this.currentProjectDisplayed = project;
    document.getElementById("container")?.classList.toggle("no-content")
    document.getElementById("loader-container")?.classList.toggle("no-content")
    this.httpClient.getItem<GitDirectoryInfo>('http://localhost:8080/projects/getProject?projectName=' + project.githubProjectName)
      .then((value) => {
        this.currentProject = value
        document.getElementById("loader-container")?.classList.toggle("no-content")
        document.getElementById("displayer")?.classList.toggle("no-content")
      });
  }

  displayFile(path: string) {
    this.httpClient.getText('http://localhost:8080/projects/getFile?projectName=' + this.currentProjectDisplayed?.githubProjectName + '&filePath=' + path)
      .then((value) => {
        this.code = value
      });
  }

}
