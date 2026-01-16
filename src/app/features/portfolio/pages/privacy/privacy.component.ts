import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from '../../../../language.service'; 

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  constructor(
    private location: Location,
    public ls: LanguageService 
  ) {}

  goBack(): void {
    this.location.back();
  }
}