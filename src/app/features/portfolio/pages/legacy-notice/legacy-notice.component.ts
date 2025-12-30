import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from '../../../../language.service'; 

@Component({
  selector: 'app-legacy-notice',
  templateUrl: './legacy-notice.component.html',
  styleUrls: ['./legacy-notice.component.scss']
})
export class LegacyNoticeComponent {
  constructor(
    private location: Location,
    public ls: LanguageService
  ) {}

  goBack(): void {
    this.location.back();
  }
}