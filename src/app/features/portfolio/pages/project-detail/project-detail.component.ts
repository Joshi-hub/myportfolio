import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../../language.service'; 
import { TRANSLATIONS } from '../../../../language-text';

type ProjectKey = keyof typeof TRANSLATIONS['en']['projects'];

type Project = {
  id: string;
  titleKey: ProjectKey;
  descKey: ProjectKey;
  duration: string;
  image: string;
  githubUrl: string;
  liveTestUrl: string;
};

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  projectId = '';
  project?: Project;
  nextProjectId = '';
  private sub?: Subscription;

  private projects: Project[] = [
    {
      id: 'el-pollo-loco',
      titleKey: 'polloTitle',
      descKey: 'polloDesc',
      duration: '3 weeks',
      image: 'assets/img/Pollo.png',
      githubUrl: '#',
      liveTestUrl: '#'
    },
    {
      id: 'join',
      titleKey: 'joinTitle',
      descKey: 'joinDesc',
      duration: '3 weeks',
      image: 'assets/img/join.jpg',
      githubUrl: '#',
      liveTestUrl: '#'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public ls: LanguageService 
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.initializeProjectData(id);
    });
  }

  private initializeProjectData(id: string) {
    this.projectId = id;
    const idx = this.projects.findIndex(p => p.id === id);

    if (idx === -1) {
      this.router.navigate(['/']);
      return;
    }
    this.setProjectState(idx);
  }

  private setProjectState(idx: number) {
    this.project = this.projects[idx];
    const nextIdx = (idx + 1) % this.projects.length;
    this.nextProjectId = this.projects[nextIdx].id;
  }

  getTranslation(key: ProjectKey): string {
    return (this.ls.t('projects') as any)[key];
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}