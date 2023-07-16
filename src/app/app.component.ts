import { Component } from '@angular/core';
import { getFavorites } from './actions/game.actions';
import { Store } from '@ngrx/store';
import { NavbarAction } from './models/navbar-action';
import { navbarActions } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _store: Store) {
    this._store.dispatch(getFavorites());
  }
}
