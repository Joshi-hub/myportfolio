import { Component, AfterViewInit } from '@angular/core'; // 1. AfterViewInit importieren
import { Location } from '@angular/common';
import { LanguageService } from '../../../../language.service'; 

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements AfterViewInit { 
  constructor(
    private location: Location,
    public ls: LanguageService 
  ) {}

  ngAfterViewInit(): void {
    const element = document.querySelector('.privacy-notice');
    
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }

  goBack(): void {
    this.location.back();
  }
}