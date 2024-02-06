import { Component, Input } from '@angular/core';
import { SelectData } from '@shared/types';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent {
  @Input() data!: SelectData[];
}
