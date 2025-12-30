import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service'; 

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  
  constructor(public ls: LanguageService) {}

  scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}