import { Component, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { addFavoriteGame, removeFavoriteGame } from 'src/app/actions/game.actions';
import { BreadCrumbItem } from 'src/app/models/breadcrumb-item';
import { Filter, GameFilter } from 'src/app/models/game-filter';
import { Game } from 'src/app/models/game.model';
import { SelectItem } from 'src/app/models/select-item';
import { GameDataService } from 'src/app/services/game-data.service';
import { SorterComponent } from 'src/app/shared/components/sorter/sorter.component';
import { breadCrumbItems, gameSorterItems, getCustomFilters, getDefaultFilters, getFilterSelection, sortByProperty } from 'src/app/shared/utils';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  @ViewChild('sorter', { static: false }) sorter: SorterComponent | undefined;
  public itemSize: number = 0;
  public games: Game[] = [];
  public gamesSorted: Game[] = [];
  public favorites$: Observable<Game[]> | undefined;
  public breadCrumbItems: Array<BreadCrumbItem> = breadCrumbItems;
  public filters: Filter = { default: [], custom: [] };
  public sorterOptions: SelectItem[] = gameSorterItems;
  public filterSelection: GameFilter[] = [];
  public showMobileFilters: boolean = false;
  public description: string = `"Descubre una amplia gama de juegos para la familia de consolas Nintendo Switch™, 
                          incluidos los últimos lanzamientos, clásicos y títulos multijugador."`;
  public title: string = `Juegos para Nintendo Switch`;

  constructor(private _game: GameDataService, private store: Store, private toastr: ToastrService) {
    this.getGamesData();
  }

  private getFavorites() {
    this.favorites$ = this.store.pipe(select((state: any) => state.game.favorites));
    this.favorites$.subscribe({
      next: (games: Game[]) => {
        this.games = [...this.games].map((game: Game) => ({
          ...game,
          isFavorite: games.find((_game: Game) => game.nsuid === _game.nsuid) ? true : false
        }));
      }
    });
  }

  private getGamesData() {
    this._game.getGamesData().subscribe({
      next: (games: Game[]) => {
        this.games = games;
        this.gamesSorted = games;
        this.itemSize = this.games.length;
        this.getFavorites();
        this.filters.default = getDefaultFilters(this.games);
        this.filters.custom = getCustomFilters(this.games);
      }
    });
  }

  public hearthClickHandler(action: boolean, game: Game) {
    if (action) this.addToFavorites(game);
    else this.removeFromFavorites(game.nsuid);
    this.toastr.success("Lista de deseos actualizada", "Nintendo Switch", { positionClass: 'toast-bottom-center' })

  }

  public addToFavorites(game: Game): void {
    this.store.dispatch(addFavoriteGame({ game }));
  }

  public removeFromFavorites(gameId: string): void {
    this.store.dispatch(removeFavoriteGame({ gameId }));
  }

  public sorterItems(sorter: SelectItem): void {
    this.gamesSorted = sortByProperty(this.games, 'title', sorter.value);
  }

  public applyFilters(): void {
    this.gamesSorted = sortByProperty(this.games, 'title', this.sorter?.value?.value);
    this.filterSelection = getFilterSelection(this.filters);
    this.filterSelection.forEach((filter: GameFilter) => {
      this.gamesSorted = this.applyGameFilter([...this.gamesSorted], filter.id, filter.value);
    });
  }

  private applyGameFilter(games: Game[], criteria: 'genres' | 'filters' | 'nsoFeatures', value: any) {
    return games.filter((game: Game) => game[criteria].includes(value));
  }
}