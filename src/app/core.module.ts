import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Header Import hier LÖSCHEN
import { FooterComponent } from './core/layout/footer/footer.component';

@NgModule({
  declarations: [
    // HeaderComponent hier LÖSCHEN
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // HeaderComponent hier LÖSCHEN
    FooterComponent   
  ]
})
export class CoreModule { }