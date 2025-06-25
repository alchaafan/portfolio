import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-me',
  imports: [TranslateModule],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {

  constructor(private translate: TranslateService){}
  changeLanguage(language: string) {
     this.translate.use(language);
  }

}
