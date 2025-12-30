import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../../language.service'; // Pfad prüfen
import { TRANSLATIONS } from '../../../../language-text';

// Wir definieren einen Typ für die Schlüssel, um Tippfehler zu vermeiden
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

  // Hier nutzen wir die Keys aus deiner TRANSLATIONS Datei
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
    public ls: LanguageService // Wichtig: public für den Zugriff im HTML
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id') ?? '';
      const idx = this.projects.findIndex(p => p.id === this.projectId);

      if (idx === -1) {
        this.router.navigate(['/']);
        return;
      }

      this.project = this.projects[idx];
      const nextIdx = (idx + 1) % this.projects.length;
      this.nextProjectId = this.projects[nextIdx].id;
    });
  }

  // Hilfsmethode, um den Text sicher aus dem Translation-Objekt zu holen
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