import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameFavoritesComponent } from './pages/game-favorites/game-favorites.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'games' },
  { path: 'games', component: GameListComponent },
  { path: 'favorites', component: GameFavoritesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
