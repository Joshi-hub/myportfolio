import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service';
import { TRANSLATIONS } from '../../../../language-text'; 

type ProjectKey = keyof typeof TRANSLATIONS['en']['projects'];

type Project = {
  id: string;
  titleKey: ProjectKey; 
  descKey: ProjectKey;   
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
      titleKey: 'polloTitle',
      descKey: 'polloDesc',
      image: 'assets/img/Pollo.png'
    },
    {
      id: 'debubble',
      image: 'assets/img/dab.jpg',
      titleKey: 'debubbleTitle',
      descKey: 'debubbleDescription',
    },
  ];

  constructor(public ls: LanguageService) {}
}