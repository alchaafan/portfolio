import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'assets/images/angular-icon.png' },
    { name: 'TypeScript', icon: 'assets/images/typescript-icon.png' },
    { name: 'JavaScript', icon: 'assets/images/javascript-icon.png' },
    { name: 'HTML', icon: 'assets/images/html-icon.png' },
    { name: 'Scrum', icon: 'assets/images/scrum-icon.png' },
    { name: 'Firebase', icon: 'assets/images/firebase-icon.png' },
    { name: 'Git', icon: 'assets/images/git-icon.png' },
    { name: 'CSS', icon: 'assets/images/css-icon.png' },
    { name: 'Rest API', icon: 'assets/images/api-icon.png' },
    { name: 'Material Design', icon: 'assets/images/material-design-icon.png' },
  ];
}
