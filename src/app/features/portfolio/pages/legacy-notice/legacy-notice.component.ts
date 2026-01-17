import { Component, AfterViewInit } from '@angular/core'; // 1. AfterViewInit importieren
import { Location } from '@angular/common';
import { LanguageService } from '../../../../language.service'; 

@Component({
  selector: 'app-legacy-notice',
  templateUrl: './legacy-notice.component.html',
  styleUrls: ['./legacy-notice.component.scss']
})
export class LegacyNoticeComponent implements AfterViewInit { 
  constructor(
    private location: Location,
    public ls: LanguageService
  ) {}

  ngAfterViewInit(): void {
    const element = document.querySelector('.legacy-notice');
    
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }

  goBack(): void {
    this.location.back();
  }
}