import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'info';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {

  constructor(private http: HttpClient) {}

  mailTest = true;

  formStatus: FormStatus = 'idle';
  formMessage = '';

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as const
    }
  };

  private markAllTouched(form: NgForm) {
    Object.values(form.controls).forEach(control => control.markAsTouched());
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((value || '').trim());
  }

  private setStatus(status: FormStatus, message: string) {
    this.formStatus = status;
    this.formMessage = message;
  }

  onSubmit(ngForm: NgForm) {
    this.setStatus('idle', '');

    if (!ngForm.valid) {
      this.markAllTouched(ngForm);
      this.setStatus('error', 'Please complete all fields and accept the privacy policy.');
      return;
    }

    if (!this.isValidEmail(this.contactData.email)) {
      this.setStatus('error', 'Please enter a valid email address.');
      return;
    }

    if (!this.mailTest) {
      this.setStatus('sending', 'Sending your message…');

      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('Mail response:', response);
            ngForm.resetForm();
            this.setStatus('success', 'Thanks! Your message has been sent.');
          },
          error: (error) => {
            console.error(error);
            this.setStatus('error', 'Sorry — your message could not be sent. Please try again.');
          },
          complete: () => console.info('send post complete')
        });
    } else {
      console.info('Mail-Test aktiv: Nachricht wird nicht gesendet.');
      ngForm.resetForm();
      this.setStatus('info', 'Test mode is active: message was not sent.');
    }
  }
}
