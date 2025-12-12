import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {

  projects = [
    {
      title: 'El Pollo Loco',
      description: 'A jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa bottles to fight against the crazy hen.',
      techStack: [
        { name: 'HTML', icon: 'assets/img/html.png' },
        { name: 'CSS', icon: 'assets/img/css.png' },
        { name: 'JavaScript', icon: 'assets/img/javascript.png' }
      ],
      image: 'assets/img/Pollo.png', 
      link: '#',   
      github: '#'  
    },
    {
      title: 'El Pollo Loco',
      description: 'A jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa bottles to fight against the crazy hen.',
      techStack: [
        { name: 'HTML', icon: 'assets/img/html.png' },
        { name: 'CSS', icon: 'assets/img/css.png' },
        { name: 'JavaScript', icon: 'assets/img/javascript.png' }
      ],
      image: 'assets/img/join.jpg', 
      link: '#',   
      github: '#'  
    },
  ];

}
