import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPageComponent } from './features/portfolio/pages/portfolio-page/portfolio-page.component';
import { ProjectDetailComponent } from './features/portfolio/pages/project-detail/project-detail.component';
import { LegacyNoticeComponent } from './features/portfolio/pages/legacy-notice/legacy-notice.component';

const routes: Routes = [
  { path: 'projects/legacy-notice', component: LegacyNoticeComponent },
  { path: '', component: PortfolioPageComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
