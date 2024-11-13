import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DevProject } from './dev_model';
import { HttpServiceService } from '../../Services/http/http-service.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule],
  selector: 'app-development-projects',
  templateUrl: './development-projects.component.html',
  styleUrl: './development-projects.component.css'
})


export class DevelopmentProjectsComponent {

  public data: DevProject[] = [];

  constructor(private httpClient: HttpServiceService) {
    this.httpClient.getJson('http://localhost:8080/projects/getAll')
      .then((value) => {
        this.data = value
      });
  }



  displayProject(id: number) {

  }
}
