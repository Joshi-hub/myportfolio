import { ChangeDetectionStrategy, Component } from '@angular/core';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  profileUrl?: string;
  variant: 'left' | 'center' | 'right';
};

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSectionComponent {
  readonly items: Testimonial[] = [
    {
      variant: 'left',
      quote:
        "Karl really kept the team together with his great organization and clear communication. We wouldn’t have got this far without his commitment.",
      name: 'Joshua A.',
      role: 'Frontend Developer',
      profileUrl: '#',
    },
    {
      variant: 'center',
      quote:
        "It’s a pleasure to work with Karl. He knows how to encourage team members to work together and build solutions. Regarding the well-being, he was always present and helpful.",
      name: 'Colleague',
      role: 'Team Member',
      profileUrl: '#',
    },
    {
      variant: 'right',
      quote:
        'His positive willingness to take on tasks is a significant contribution to us.',
      name: 'Colleague',
      role: 'Team Member',
      profileUrl: '#',
    },
  ];
}

