import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'src/app/models/select-item';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss']
})
export class SorterComponent {
  @Input() title: string = "Organizar por:";
  @Input() options: Array<any> = [];
  @Output() onSorterChanged: EventEmitter<any> = new EventEmitter();
  public value: SelectItem | undefined;

  public sorterChanged(option: any) {
    this.value = option;
    this.onSorterChanged.emit(option);
  }
}
