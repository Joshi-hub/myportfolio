import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service'; // Pfad prüfen

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  frontend = 'FRONTEND'.split('');
  developer = 'DEVELOPER'.split('');

  constructor(public ls: LanguageService) {}

  scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}