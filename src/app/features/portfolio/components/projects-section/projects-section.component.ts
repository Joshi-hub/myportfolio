import { Component } from '@angular/core';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      id: 'el-pollo-loco',
      title: 'El Pollo Loco',
      description:
        'A jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa bottles to fight against the crazy hen.',
      image: 'assets/img/Pollo.png'
    },
    {
      id: 'join',
      title: 'Join',
      description:
        'A Kanban-style project management tool inspired by Trello. Create tasks, assign users, manage categories and keep track of your workflow in a clear board view.',
      image: 'assets/img/join.jpg'
    }
  ];
}
