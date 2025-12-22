import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyNoticeComponent } from './legacy-notice.component';

describe('LegacyNoticeComponent', () => {
  let component: LegacyNoticeComponent;
  let fixture: ComponentFixture<LegacyNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegacyNoticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegacyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
