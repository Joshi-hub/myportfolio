import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  skills = [
    { name: 'HTML', icon: 'assets/img/html.png' },
    { name: 'CSS', icon: 'assets/img/css.png' },
    { name: 'JavaScript', icon: 'assets/img/javascript.png' },
    { name: 'TypeScript', icon: 'assets/img/typescript.png' },
    { name: 'Angular', icon: 'assets/img/angular.png' },
    { name: 'Firebase', icon: 'assets/img/firebase.png' },
    { name: 'Git', icon: 'assets/img/git.png' },
    { name: 'Material', icon: 'assets/img/md.png' },
    { name: 'scrum', icon: 'assets/img/scrum.png' },
    { name: 'Rest-API', icon: 'assets/img/rastapi.png' }
  ];
}
