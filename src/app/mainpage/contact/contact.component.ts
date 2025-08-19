import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, NavigationStart, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private translate: TranslateService, private router: Router) {}
  
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  submitted: boolean = false;
  feedbackMessage: boolean | string = false;

  post = {
    endpoint: 'https://muhammad-alchaafan.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  private navigationSubscription: any;

  onSumbit(NgForm: NgForm) {
    this.submitted = true;

    if (NgForm.submitted && NgForm.valid) {
      this.http
        .post(this.post.endpoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.feedbackMessage = true;
            this.submitted = false;

            setTimeout(() => {
              NgForm.resetForm();
              this.feedbackMessage = false;
            }, 3000);
          },
          error: (error) => {
            this.feedbackMessage = 'error';

            setTimeout(() => {
              this.feedbackMessage = false;
            }, 3000);
          },
        });
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: Event) {
    sessionStorage.setItem('contactFormData', JSON.stringify(this.contactData));
    sessionStorage.setItem('contactScrollPosition', window.pageYOffset.toString());
  }

  ngOnInit() {
    const savedData = sessionStorage.getItem('contactFormData');
    if (savedData) {
      this.contactData = JSON.parse(savedData);
    }

    const savedScrollPosition = sessionStorage.getItem('contactScrollPosition');
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, Number(savedScrollPosition));
        sessionStorage.removeItem('contactScrollPosition');
      }, 100);
    }


    this.navigationSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        sessionStorage.setItem('contactFormData', JSON.stringify(this.contactData));
        sessionStorage.setItem('contactScrollPosition', window.pageYOffset.toString());
      }
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}