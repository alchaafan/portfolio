import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  activeSection: string = '';
  isPrivacyPage = false; 
  private routerSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller,
    private router: Router 
  ) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPrivacyPage = event.url === '/privacy';
      }
    });
    
    window.addEventListener('scroll', () => this.detectActiveSection());
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  detectActiveSection(): void {
    const sectionIds = ['letswork', 'skills', 'mywork'];
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
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