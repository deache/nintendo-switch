import { Component } from '@angular/core';
import { NavbarAction } from 'src/app/models/navbar-action';
import { navbarActions, navbarMobileActions } from '../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navbarActions: NavbarAction[] = navbarActions;
  public headerActions: NavbarAction[] = navbarMobileActions;

  constructor(private router: Router) {

  }

  public onActionClicked(id: string) {
    if (id === 'wishlist') this.router.navigate(['favorites']);
  }
}
