import { Component } from '@angular/core';
import { MeComponent } from "./me/me.component";
import { LetsworkComponent } from "./letswork/letswork.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyworkComponent } from "./mywork/mywork.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-mainpage',
  imports: [MeComponent, LetsworkComponent, SkillsComponent, MyworkComponent, ContactComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
