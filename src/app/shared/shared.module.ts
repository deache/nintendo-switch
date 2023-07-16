import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';
import { BannerComponent } from './layout/banner/banner.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './components/breadcrumb/breadcrumb-item/breadcrumb-item.component';
import { SorterComponent } from './components/sorter/sorter.component';
import { SelectComponent } from './components/select/select.component';
import { NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltersComponent } from './components/filters/filters.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarActionComponent } from './components/navbar-action/navbar-action.component';
import { GameFavoriteItemComponent } from './components/game-favorite-item/game-favorite-item.component';
import { NoDataComponentComponent } from './components/no-data-component/no-data-component.component';
import { ToastrModule } from 'ngx-toastr';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DiscountTagComponent } from './components/discount-tag/discount-tag.component';

@NgModule({
  declarations: [
    GameCardComponent,
    BannerComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    SorterComponent,
    SelectComponent,
    FiltersComponent,
    CheckboxComponent,
    HeaderComponent,
    NavbarActionComponent,
    GameFavoriteItemComponent,
    NoDataComponentComponent,
    IconButtonComponent,
    NavbarComponent,
    DiscountTagComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbAccordionModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    GameCardComponent,
    BannerComponent,
    BreadcrumbComponent,
    SorterComponent,
    SelectComponent,
    FiltersComponent,
    CheckboxComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarActionComponent,
    GameFavoriteItemComponent,
    IconButtonComponent,
    NoDataComponentComponent,
    DiscountTagComponent
  ]
})
export class SharedModule { }
