import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {

  constructor(private http: HttpClient) {}

  // Testmodus: true = nichts wird wirklich geschickt, nur getestet
  mailTest = true;

  contactData = {
    name: '',
    email: '',
    message: ''
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

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid) {
      return;
    }

    if (!this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('Mail response:', response);
            ngForm.resetForm();
            alert('Message sent successfully!');
          },
          error: (error) => {
            console.error(error);
            alert('Message could not be sent.');
          },
          complete: () => console.info('send post complete')
        });
    } else {
      console.info('Mail-Test aktiv: Nachricht wird nicht gesendet.');
      ngForm.resetForm();
      alert('Message validation test successful 👍');
    }
  }
}
