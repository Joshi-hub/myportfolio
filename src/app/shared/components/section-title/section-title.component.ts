import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements AfterViewInit, OnDestroy {
  @Input() reveal: 'left' | 'right' = 'left';
  @Input() revealDelay = 0; 

  private observer?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>, private r: Renderer2) {}

  ngAfterViewInit(): void {
    const hostEl = this.host.nativeElement;
    const target =
      (hostEl.closest('section, .section, [data-section]') as HTMLElement | null) ??
      hostEl.parentElement;

    if (!target) return;

    this.r.addClass(target, 'section-reveal');
    this.r.addClass(target, this.reveal === 'right' ? 'from-right' : 'from-left');
    this.r.setStyle(target, '--reveal-delay', `${this.revealDelay}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      this.r.addClass(target, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.r.addClass(target, 'is-visible');
          this.observer?.unobserve(target); 
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    this.observer.observe(target);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
