import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  constructor(private translate: TranslateService) {}
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

  onSumbit(NgForm: NgForm) {
    this.submitted = true;

    if (NgForm.submitted && NgForm.valid) {
      this.http.post(this.post.endpoint, this.post.body(this.contactData))

        .subscribe({
          next: (response) => {
            setTimeout(() => {
              NgForm.resetForm();
            }, 3000);
            this.feedbackMessage = true;
            this.submitted = false;
            setTimeout(() => {
              this.feedbackMessage = false;
            }, 3000);
          },
          error: (error) => {
            this.feedbackMessage = 'error';
          },
        });
    }
  }
}
