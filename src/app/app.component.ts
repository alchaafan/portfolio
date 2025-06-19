import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MeComponent } from "./me/me.component";
import { LetsworkComponent } from "./letswork/letswork.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MeComponent, LetsworkComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
