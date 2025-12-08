import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';



@NgModule({
  declarations: [
    PortfolioPageComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
