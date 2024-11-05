import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule],
  selector: 'app-development-projects',
  templateUrl: './development-projects.component.html',
  styleUrl: './development-projects.component.css'
})

export class DevelopmentProjectsComponent {
  public data = ["hola", "adios"]
}
