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

  formStatus: FormStatus = 'idle';
  formMessage = '';

  isSubmitting = false;
  cooldownUntil = 0; 

  contactData = this.getEmptyContactData();

  private readonly endPoint = 'https://portfolio.joshuaauerbach.de/sendMail.php';

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
    this.sendMail(ngForm);
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
    this.isSubmitting = true;
    this.setStatus('sending', 'sending');

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(
      this.endPoint, 
      JSON.stringify(this.contactData), 
      { headers: headers, responseType: 'text' }
    ).subscribe({
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