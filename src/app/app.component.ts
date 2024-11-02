import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLinkActive, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'NohadonFiles';

  onDisplayMenu() {
    document.getElementById("main_menu_navigation")?.classList.toggle("show");
  }

}
