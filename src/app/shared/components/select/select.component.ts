import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  public _options: Array<any> = [];
  public optionSelected: any;

  @Input() set options(value: Array<any>) {
    if (!value || !value.length) return;
    this._options = value;
    this.optionSelected = value.find((item: any) => item.selected) ?? value[0];
  }

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  public selectOption(option: any) {
    this.optionSelected = option;
    this.onSelect.emit(this.optionSelected);
  }
}
