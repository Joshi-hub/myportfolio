import { Component, OnDestroy } from '@angular/core';
import { LanguageService, Language } from '../../../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  showOpenFx = false;
  showCloseFx = false;
  private fxTimer: ReturnType<typeof setTimeout> | null = null;
  private lastChecked: boolean | null = null;

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

  onMenuToggle(event: Event): void {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;

    if (this.lastChecked === checked) return;
    this.lastChecked = checked;
    this.clearFx();

    const duration = 800;

    if (checked) {
      this.showOpenFx = true;
      this.fxTimer = setTimeout(() => {
        this.showOpenFx = false;
        this.fxTimer = null;
      }, duration);
    } else {
      this.showCloseFx = true;
      this.fxTimer = setTimeout(() => {
        this.showCloseFx = false;
        this.fxTimer = null;
      }, duration);
    }
  }

  private clearFx(): void {
    this.showOpenFx = false;
    this.showCloseFx = false;
    if (this.fxTimer) {
      clearTimeout(this.fxTimer);
      this.fxTimer = null;
    }
  }

  ngOnDestroy(): void {
    if (this.fxTimer) clearTimeout(this.fxTimer);
  }
}