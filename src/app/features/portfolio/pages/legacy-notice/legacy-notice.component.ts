import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legacy-notice',
  templateUrl: './legacy-notice.component.html',
  styleUrls: ['./legacy-notice.component.scss']
})
export class LegacyNoticeComponent {
  prevProjectId = 'join';
  nextProjectId = 'el-pollo-loco';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
