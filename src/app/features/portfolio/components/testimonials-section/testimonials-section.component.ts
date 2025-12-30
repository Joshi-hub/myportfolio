import { Component } from '@angular/core'; // ChangeDetectionStrategy hier nicht mehr nötig
import { LanguageService } from '../../../../language.service';
import { TRANSLATIONS } from '../../../../language-text';

type TestimonialKey = keyof typeof TRANSLATIONS['en']['testimonials'];

type Testimonial = {
  quoteKey: TestimonialKey; 
  name: string;
  role: string;
  profileUrl?: string;
  variant: 'left' | 'center' | 'right';
};

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
  // ZEILE ENTFERNT: changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsSectionComponent {
  readonly items: Testimonial[] = [
    {
      variant: 'left',
      quoteKey: 'quote1',
      name: 'Joshua A.',
      role: 'Frontend Developer',
      profileUrl: '#',
    },
    {
      variant: 'center',
      quoteKey: 'quote2',
      name: 'Colleague',
      role: 'Team Member',
      profileUrl: '#',
    },
    {
      variant: 'right',
      quoteKey: 'quote3',
      name: 'Colleague',
      role: 'Team Member',
      profileUrl: '#',
    },
  ];

  constructor(public ls: LanguageService) {}

  getTranslation(key: string): string {
    return (this.ls.t('testimonials') as any)[key];
  }
}