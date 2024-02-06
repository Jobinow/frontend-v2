import { Component } from '@angular/core';
import { SelectData } from '@shared/types';

@Component({
  selector: 'app-job-offers-filters',
  templateUrl: './job-offers-filters.component.html',
  styleUrls: ['./job-offers-filters.component.less']
})


export class JobOffersFiltersComponent {
  jobType: SelectData[] = [
    { value: "full-time", label: "full time" },
    { value: "stage", label: "stage" },
    { value: "remote", label: "remote" },
    { value: "hybrid", label: "hybrid" }
  ]
  datePosted: SelectData[] = [
    { value: "24", label: "last 24 hours" },
    { value: "3", label: "last 3 days" },
    { value: "7", label: "last 7 days" },
    { value: "last-month", label: "last month" }
  ]
}
