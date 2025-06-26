import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string) {
    this.translate.use(language);
  }
  isMenuOpen = false;

  closeMenu() {
    const body = document.body;
    this.isMenuOpen = false;
    body.style.overflow = 'auto';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const body = document.body;

    if (this.isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  isMenuActive() {
    return this.isMenuOpen ? 'open' : '';
  }
}
