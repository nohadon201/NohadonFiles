import { Routes } from '@angular/router';
import { HomeComponent } from './main-sections/home/home.component';
import { SoftwareDevelopmentComponent } from './main-sections/software-development/software-development.component';
import { GameDevelopmentComponent } from './main-sections/game-development/game-development.component';
import { GraphicsDevelopmentComponent } from './main-sections/graphics-development/graphics-development.component';
import { AboutMeComponent } from './main-sections/about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'SoftwareDevelopment', component: SoftwareDevelopmentComponent },
  { path: 'GameDevelopment', component: GameDevelopmentComponent },
  { path: 'GraphicsDevelopment', component: GraphicsDevelopmentComponent },
  { path: 'AboutMe', component: AboutMeComponent },
];
