import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { HeaderComponent } from '../core/layout/header/header.component'; 
import { FooterComponent } from '../core/layout/footer/footer.component';

@NgModule({
  declarations: [
    SectionTitleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionTitleComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}