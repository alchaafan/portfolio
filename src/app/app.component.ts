import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MeComponent } from "./me/me.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
