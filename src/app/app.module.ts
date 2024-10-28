import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './main-sections/home/home.component';
import { DevelopmentProjectsComponent } from './main-sections/development-projects/development-projects.component';
import { NohadengineComponent } from './main-sections/nohadengine/nohadengine.component';
import { GraphicsDevelopmentComponent } from './main-sections/graphics-development/graphics-development.component';
import { AboutMeComponent } from './main-sections/about-me/about-me.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'DevelopmentProjects', component: DevelopmentProjectsComponent },
      { path: 'NohadEngine', component: NohadengineComponent },
      { path: 'GraphicsDevelopment', component: GraphicsDevelopmentComponent },
      { path: 'AboutNohadon', component: AboutMeComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DevelopmentProjectsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
