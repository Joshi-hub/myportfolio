import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { HeaderComponent } from '../core/layout/header/header.component'; 

@NgModule({
  declarations: [
    SectionTitleComponent,
    HeaderComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionTitleComponent,
    HeaderComponent 
  ]
})
export class SharedModule {}