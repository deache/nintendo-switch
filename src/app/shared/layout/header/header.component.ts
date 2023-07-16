import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarAction } from 'src/app/models/navbar-action';
import { breadCrumbItems, headerActions, navbarActions } from '../../utils';
import { BreadCrumbItem } from 'src/app/models/breadcrumb-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public breadCrumbItems: Array<BreadCrumbItem> = breadCrumbItems;
  public headerActions: NavbarAction[] = headerActions;

  constructor(private router: Router) {
  }

  public onActionClicked(id: string) {
    if (id === 'wishlist') this.router.navigate(['favorites']);
  }
}