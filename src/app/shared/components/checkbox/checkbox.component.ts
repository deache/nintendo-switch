import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  public _config: any;
  @Input() set config(value: any) {
    this._config = value;
  }
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  public checkboxChanged(value: any) {
    this.onChange.emit(value.target.checked);
  }
}
