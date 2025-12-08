import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.contactData);
    alert('Message sent! I will get back to you soon.');

    this.contactData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
