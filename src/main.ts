import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EventInfoWrapper } from '@angular/core/primitives/event-dispatch';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

class Menu {

  private navMenu: HTMLDivElement;
  private clicked: Boolean = false;

  constructor() {
    let btn = <HTMLInputElement>document.getElementById("display_menu_btn");
    btn.addEventListener("click", (_: Event) => this.onDisplayMenu());
    this.navMenu = <HTMLDivElement>document.getElementById("main_menu_navigation")

  }

  onDisplayMenu() {
    this.navMenu.classList.toggle("show");
  }
}

new Menu();

