import { Injectable } from '@angular/core';
import { TRANSLATIONS } from './language-text';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: Language = 'en';

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    document.documentElement.lang = lang;
  }

  get language(): Language {
    return this.currentLanguage;
  }

  t<K extends keyof typeof TRANSLATIONS['en']>(section: K) {
    return TRANSLATIONS[this.currentLanguage][section];
  }
}

