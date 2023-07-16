import { createAction, createSelector, props } from '@ngrx/store';
import { Game } from '../models/game.model';

export const addFavoriteGame = createAction(
    '[Game] Add Favorite',
    props<{ game: Game }>()
);

export const removeFavoriteGame = createAction(
    '[Game] Remove Favorite',
    props<{ gameId: string }>()
);

export const getFavorites = createAction('[Game] Get Favorites');

export const selectFavorites = (state: Game[]) => state;

export const loadFavorites = createSelector(selectFavorites, (state) => {
    const games = localStorage.getItem('favorites');
    return games ? JSON.parse(games) : [];
});