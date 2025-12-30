import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service'; 

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
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
    { name: 'Rest-API', icon: 'assets/img/rastapi.png' },
  ];

  private readonly IMG_CLOSED = 'assets/img/sticker.png';
  private readonly IMG_MID = 'assets/img/Property 1=Variant3.png';
  private readonly IMG_OPEN = 'assets/img/Property 1=Hover (1).png';

  stickerSrc = this.IMG_CLOSED;
  isOpen = false;
  isAnimating = false;

  constructor(public ls: LanguageService) {} 

  toggleSticker() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    if (!this.isOpen) {
      this.stickerSrc = this.IMG_MID;
      setTimeout(() => {
        this.stickerSrc = this.IMG_OPEN;
        this.isOpen = true;
        this.isAnimating = false;
      }, 150);
    } else {
      this.stickerSrc = this.IMG_MID;
      setTimeout(() => {
        this.stickerSrc = this.IMG_CLOSED;
        this.isOpen = false;
        this.isAnimating = false;
      }, 150);
    }
  }
}