import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-letswork',
  imports: [TranslateModule],
  templateUrl: './letswork.component.html',
  styleUrl: './letswork.component.scss',
})
export class LetsworkComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
