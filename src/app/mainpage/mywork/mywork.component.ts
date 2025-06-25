import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mywork',
  imports: [TranslateModule],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss',
})
export class MyworkComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
