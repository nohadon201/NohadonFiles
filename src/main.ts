import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { EventInfoWrapper } from '@angular/core/primitives/event-dispatch';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));



class Menu {

  private navMenu: HTMLDivElement;

  constructor() {
    let btn = <HTMLButtonElement>document.getElementById("display_menu_btn");
    btn.addEventListener("click", (_: Event) => this.onDisplayMenu());
    this.navMenu = <HTMLDivElement>document.getElementById("main_menu_navigation")
  }

  onDisplayMenu() {
    this.navMenu.classList.toggle("show");
  }
}

new Menu();

