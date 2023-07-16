import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter, GameFilter } from 'src/app/models/game-filter';
import { clearGameFilters, getFilterSelection } from '../../utils';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filters: Filter | undefined;
  @Input() counter: number = 0;
  @Output() onFiltersChanged: EventEmitter<Filter> = new EventEmitter();
  @Output() onFiltersCleared: EventEmitter<void> = new EventEmitter();
  @Output() onShowFilters: EventEmitter<void> = new EventEmitter();
  public filterSelection: GameFilter[] = [];

  public filterChanged(filter: GameFilter, value: boolean) {
    if (!this.filters) return;
    filter.checked = value;
    this.onFiltersChanged.emit(this.filters);
    this.filterSelection = getFilterSelection(this.filters);
  }

  public clearSelection() {
    if (!this.filters) return;
    this.filters = clearGameFilters(this.filters);
    this.filterSelection = getFilterSelection(this.filters);
    this.onFiltersCleared.emit();
  }

  public showResults() {
    this.onShowFilters.emit();
  }
}
