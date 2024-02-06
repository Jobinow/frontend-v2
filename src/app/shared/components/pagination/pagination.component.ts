import { Component, Input } from '@angular/core';
import { PageInfo } from '@app/ngrx/jobOffers/jobOffersState.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent {
  @Input() paginationInfo!: PageInfo;
  @Input() url!: string;
}
