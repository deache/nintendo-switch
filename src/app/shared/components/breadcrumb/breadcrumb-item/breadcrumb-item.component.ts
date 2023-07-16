import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() title: string = "";
  @Input() active: boolean = false;
}
