import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { removeFavoriteGame } from 'src/app/actions/game.actions';
import { BreadCrumbItem } from 'src/app/models/breadcrumb-item';
import { Game } from 'src/app/models/game.model';
import { breadCrumbItemsFav } from 'src/app/shared/utils';

@Component({
  selector: 'app-game-favorites',
  templateUrl: './game-favorites.component.html',
  styleUrls: ['./game-favorites.component.scss']
})
export class GameFavoritesComponent {
  public favorites$: Observable<Game[]> | undefined;
  public breadcrumbItems: Array<BreadCrumbItem> = breadCrumbItemsFav;
  public title: string = `Lista de deseos`;
  public bDescription: string = `"Descubre una amplia gama de juegos para la familia de consolas Nintendo Switch™, 
                          incluidos los últimos lanzamientos, clásicos y títulos multijugador."`;
  public bTitle: string = `Juegos para Nintendo Switch`;
  public description: string = `Explora, adquiere o remueve artículos de tu lista de deseos aquí. También puedes compartir tu lista con tu familia y tus amigos.`

  constructor(private store: Store, private toastr: ToastrService) {
    this.getFavorites();
  }


  private getFavorites() {
    this.favorites$ = this.store.pipe(select((state: any) => state.game.favorites));
    this.favorites$.subscribe();
  }

  public heartClicked(game: Game) {
    this.removeFromFavorites(game.nsuid);
  }

  private removeFromFavorites(gameId: string): void {
    this.store.dispatch(removeFavoriteGame({ gameId }));
  }

  public onPurchasedHandler(): void {
    this.toastr.success("Juego adquirido correctamente", "Nintendo Switch", { positionClass: 'toast-bottom-center' })
  }
}
