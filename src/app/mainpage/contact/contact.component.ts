import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  formErrors = {
    name: '',
    email: '',
    message: '',
    privacy: '',
  };

  isFormValid(): boolean {
    return (
      !!this.contactData.name &&
      !!this.contactData.email &&
      !!this.contactData.message &&
      this.contactData.privacy
    );
  }

  validateForm() {
    this.formErrors = {
      name: !this.contactData.name ? 'Please enter your name' : '',
      email: !this.contactData.email ? 'Please enter your email' : '',
      message: !this.contactData.message ? 'Please enter a message' : '',
      privacy: !this.contactData.privacy
        ? 'Please accept the privacy policy'
        : '',
    };

    return Object.values(this.formErrors).every((error) => error === '');
  }

  onSubmit(ngForm: NgForm) {
    const isValid = this.validateForm();
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
