import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MeComponent } from "./me/me.component";
import { LetsworkComponent } from "./letswork/letswork.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyworkComponent } from "./mywork/mywork.component";

import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MeComponent, LetsworkComponent, SkillsComponent, MyworkComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
