import { CommonModule, ViewportScroller } from '@angular/common';
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
  activeSection: string = '';
  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller
  ) {
    window.addEventListener('scroll', () => this.detectActiveSection());
  }
 detectActiveSection(): void {
  window.addEventListener('scroll', () => {
    const sectionIds = ['letswork', 'skills', 'mywork'];
    let currentSection = '';

    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);

      if (section) {
        const rect = section.getBoundingClientRect();

        
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
          currentSection = sectionIds[i];
        }
      }
    }

    if (currentSection) {
      this.activeSection = currentSection;
    }
  });
}


  ngAfterViewInit() {
    const sections = ['letswork', 'skills', 'mywork'];
    const headerHeight = document.querySelector('header')?.offsetHeight || 100;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: `-${headerHeight}px 0px -30% 0px`,
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });
  }
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

  isCurrentLanguage(lang: string): boolean {
    return this.translate.currentLang === lang;
  }

  ngOnInit(): void {
    this.detectActiveSection();
  }
}
