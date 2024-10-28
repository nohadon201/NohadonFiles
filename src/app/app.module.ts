import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DevelopmentProjectsComponent } from './development-projects/development-projects.component';
import { NohadengineComponent } from './nohadengine/nohadengine.component';
import { GraphicsDevelopmentComponent } from './graphics-development/graphics-development.component';
import { AboutMeComponent } from './about-me/about-me.component';


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
