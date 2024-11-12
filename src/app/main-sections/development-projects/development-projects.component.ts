import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DevProject } from './dev_model';
import { HttpServiceService } from '../../Services/http/http-service.service';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule],
  selector: 'app-development-projects',
  templateUrl: './development-projects.component.html',
  styleUrl: './development-projects.component.css'
})


export class DevelopmentProjectsComponent {

  constructor(private httpClient: HttpServiceService) {

  }

  public data = [
    new DevProject(0, "Frameworks", "Java", false),
    new DevProject(1, "Multithreading", "Java", false)
  ]

  displayProject(id: number) {
    this.httpClient.getJson('https://catfact.ninja/fact').then((value) => {
      console.log("aaaaa");
      console.log(value);
    });
  }
}
