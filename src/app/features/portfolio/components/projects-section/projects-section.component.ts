import { Component } from '@angular/core';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      title: 'El Pollo Loco',
      description:
        'A jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa bottles to fight against the crazy hen.',
      image: 'assets/img/Pollo.png',
      link: '#'
    },
    {
      title: 'DABubble',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      image: 'assets/img/join.jpg',
      link: '#'
    }
  ];
}
