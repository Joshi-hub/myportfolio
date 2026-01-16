import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from '../../../../language.service'; // Pfad prüfen (muss evtl. ../../../ sein)

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  constructor(
    private location: Location,
    // Das "public" ist entscheidend, damit das HTML darauf zugreifen kann
    public ls: LanguageService 
  ) {}

  goBack(): void {
    this.location.back();
  }
}