import { Injectable } from '@angular/core';
import { TRANSLATIONS } from './language-text';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'language';
  private currentLanguage: Language = 'en';

  constructor() {
    const saved = this.safeGetItem(this.STORAGE_KEY);
    if (this.isLanguage(saved)) {
      this.currentLanguage = saved;
    }
    this.setDocumentLang(this.currentLanguage);
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    this.setDocumentLang(lang);
    this.safeSetItem(this.STORAGE_KEY, lang);
  }

  get language(): Language {
    return this.currentLanguage;
  }

  t<K extends keyof typeof TRANSLATIONS['en']>(section: K) {
    return TRANSLATIONS[this.currentLanguage][section];
  }

  private isLanguage(value: unknown): value is Language {
    return value === 'en' || value === 'de';
  }

  private setDocumentLang(lang: Language): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  private safeGetItem(key: string): string | null {
    try {
      if (typeof window === 'undefined') return null;
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private safeSetItem(key: string, value: string): void {
    try {
      if (typeof window === 'undefined') return;
      window.localStorage.setItem(key, value);
    } catch {
    }
  }
}
