import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { SharedModule } from '../../shared/shared.module';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PortfolioPageComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    TestimonialsSectionComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PortfolioPageComponent  
  ]
})
export class PortfolioModule { }