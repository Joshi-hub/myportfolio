import { Component } from '@angular/core';
import { LanguageService } from '../../../language.service'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public ls: LanguageService) {}
}