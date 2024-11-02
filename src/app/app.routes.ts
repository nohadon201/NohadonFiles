import { Routes } from '@angular/router';
import { HomeComponent } from './main-sections/home/home.component';
import { DevelopmentProjectsComponent } from './main-sections/development-projects/development-projects.component';
import { NohadengineComponent } from './main-sections/nohadengine/nohadengine.component';
import { GraphicsDevelopmentComponent } from './main-sections/graphics-development/graphics-development.component';
import { AboutMeComponent } from './main-sections/about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'DevelopmentProjects', component: DevelopmentProjectsComponent },
  { path: 'NohadEngine', component: NohadengineComponent },
  { path: 'GraphicsDevelopment', component: GraphicsDevelopmentComponent },
  { path: 'AboutMe', component: AboutMeComponent },
];
