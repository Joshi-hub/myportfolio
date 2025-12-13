import { Component } from '@angular/core';
import { LanguageService, Language } from '../../../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public language: LanguageService) {}

  setLanguage(lang: Language): void {
    this.language.setLanguage(lang);
  }

  get langSwitchClasses(): { [key: string]: boolean } {
    return {
      'lang-switch--en-active': this.language.language === 'en',
      'lang-switch--de-active': this.language.language === 'de'
    };
  }
}
