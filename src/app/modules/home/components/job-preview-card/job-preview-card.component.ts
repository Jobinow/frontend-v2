import { Component, Input } from '@angular/core';
import { JobOffer } from '@app/core/models/job-offer';

@Component({
  selector: 'app-job-preview-card',
  templateUrl: './job-preview-card.component.html',
  styleUrls: ['./job-preview-card.component.less']
})
export class JobPreviewCardComponent {
  @Input() offer:any;
}
