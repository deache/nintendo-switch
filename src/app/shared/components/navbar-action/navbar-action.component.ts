import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-action',
  templateUrl: './navbar-action.component.html',
  styleUrls: ['./navbar-action.component.scss']
})
export class NavbarActionComponent {
  @Input() id: string = "";
  @Input() label: string = "";
  @Input() icon: string = "";
  @Input() main: boolean = false;
  @Output() onItemClick: EventEmitter<string> = new EventEmitter();

  public itemClick() {
    this.onItemClick.emit(this.id);
  }
}
