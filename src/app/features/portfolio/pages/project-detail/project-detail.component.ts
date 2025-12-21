import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

type Project = {
  id: string;
  title: string;
  description: string;
  implementationDetails: string;
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
      title: 'El Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa bottles to fight against the crazy hen.',
      implementationDetails:
        'Short text that describes your role or the workflow for this specific project. Let a recruiter know about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '3 weeks',
      image: 'assets/img/Pollo.png',
      githubUrl: '#',
      liveTestUrl: '#'
    },
    {
      id: 'join',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      implementationDetails:
        'Short text that describes your role or the workflow for this specific project. Let a recruiter know about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '3 weeks',
      image: 'assets/img/join.jpg',
      githubUrl: '#',
      liveTestUrl: '#'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
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

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
