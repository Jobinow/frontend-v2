import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '@app/shared/types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {
  @Input() input!: InputType;

  @Output() changeEvent: EventEmitter<File> = new EventEmitter();

  fileUploadOnChange(event: any) {
    const file = event.target.files[0];
    this.changeEvent.emit(file);
  }
}
