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

  isSubmitting = false;
  cooldownUntil = 0; 

  contactData = this.getEmptyContactData();

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as const
    }
  };

  get isCooldownActive(): boolean {
    return Date.now() < this.cooldownUntil;
  }

  private setStatus(status: FormStatus, messageKey: string) {
    this.formStatus = status;
    this.formMessage = messageKey ? (this.ls.t('contact') as any)[messageKey] : '';
  }

  onSubmit(ngForm: NgForm) {
    if (this.isSubmitting || this.isCooldownActive) {
      this.setStatus('info', 'errorTooFast'); 
      return;
    }

    if (!this.isFormValid(ngForm)) return;

    this.isSubmitting = true;

    if (this.mailTest) {
      this.handleMailTest(ngForm);
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
        error: () => {
          this.isSubmitting = false;
          this.setStatus('error', 'errorSend');
        }
      });
  }

  private handleSuccess(ngForm: NgForm) {
    ngForm.resetForm();               
    this.contactData = this.getEmptyContactData(); 
    this.cooldownUntil = Date.now() + 30_000;

    this.isSubmitting = false;
    this.setStatus('success', 'success');
  }

  private handleMailTest(ngForm: NgForm) {
    console.log('MailTest active. Data:', this.contactData);
    this.handleSuccess(ngForm);
  }

  private getEmptyContactData() {
    return {
      name: '',
      email: '',
      message: '',
      privacyAccepted: false,
    };
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((value || '').trim());
  }
}