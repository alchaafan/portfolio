import { Component, inject } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
 

  ngOnInit() {
    this.scrollToTop();
  }

  private scrollToTop() {
    window.scroll(0, 0); 
  }
}