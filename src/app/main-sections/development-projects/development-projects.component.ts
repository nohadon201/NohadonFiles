import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DevProject, DirectoryInfo } from './dev_model';
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

  public currentProject: DirectoryInfo | null;

  @ViewChild('container', { static: false }) container: ElementRef;

  constructor(private httpClient: HttpServiceService) {
    this.httpClient.getAllItems<DevProject>('http://localhost:8080/projects/getAll')
      .then((value) => {
        this.projects = value
      });
  }

  displayProject(title: string) {
    document.getElementById("container")?.classList.toggle("no-content")
    document.getElementById("loader-container")?.classList.toggle("no-content")
    this.httpClient.getItem<DirectoryInfo>('http://localhost:8080/projects/getProjectContent?projectName=' + title)
      .then((value) => {
        this.currentProject = value
        document.getElementById("loader-container")?.classList.toggle("no-content")
        document.getElementById("displayer")?.classList.toggle("no-content")
        console.log(this.currentProject)
      });

  }
}
