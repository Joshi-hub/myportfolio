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
  projects = [
    {
      id: 'el-pollo-loco',
      title: 'El Pollo Loco',
      description: '...',
      image: 'assets/img/Pollo.png'
    },
    {
      id: 'join',
      title: 'Join',
      description: '...',
      image: 'assets/img/join.jpg'
    },
  ];
  
  
}
