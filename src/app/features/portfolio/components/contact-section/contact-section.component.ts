import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LanguageService } from '../../../../language.service'; 

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'info';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  constructor(private http: HttpClient, public ls: LanguageService) {}

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
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as const
    }
  };

  private setStatus(status: FormStatus, messageKey: string) {
    this.formStatus = status;
    this.formMessage = messageKey ? (this.ls.t('contact') as any)[messageKey] : '';
  }

  onSubmit(ngForm: NgForm) {
    if (!this.isFormValid(ngForm)) return;

    if (this.mailTest) {
      this.handleMailTest();
    } else {
      this.sendMail(ngForm);
    }
  }

  private isFormValid(ngForm: NgForm): boolean {
    this.setStatus('idle', '');
    if (!ngForm.valid) {
      this.setStatus('error', 'errorFormInvalid');
      return false;
    }
    return this.validateEmailField();
  }

  private validateEmailField(): boolean {
    if (!this.isValidEmail(this.contactData.email)) {
      this.setStatus('error', 'errorEmail');
      return false;
    }
    return true;
  }

  private sendMail(ngForm: NgForm) {
    this.setStatus('sending', 'sending');
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => this.handleSuccess(ngForm),
        error: () => this.setStatus('error', 'errorSend')
      });
  }

  private handleSuccess(ngForm: NgForm) {
    ngForm.resetForm();
    this.setStatus('success', 'success');
  }

  private handleMailTest() {
    console.log('MailTest active. Data:', this.contactData);
    this.setStatus('success', 'success');
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((value || '').trim());
  }
}