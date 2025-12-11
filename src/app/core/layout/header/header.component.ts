import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLanguage: 'en' | 'de' = 'en';

  setLanguage(lang: 'en' | 'de'): void {
    if (this.activeLanguage === lang) return;
    this.activeLanguage = lang;
    document.documentElement.lang = lang;
  }

  get langSwitchClasses(): { [klass: string]: boolean } {
    return {
      'lang-switch--en-active': this.activeLanguage === 'en',
      'lang-switch--de-active': this.activeLanguage === 'de'
    };
  }
}
