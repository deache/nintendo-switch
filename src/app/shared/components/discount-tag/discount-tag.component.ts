import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discount-tag',
  templateUrl: './discount-tag.component.html',
  styleUrls: ['./discount-tag.component.scss']
})
export class DiscountTagComponent {
  @Input() percent: number = 0;
}
