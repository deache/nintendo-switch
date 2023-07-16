import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { addFavoriteGame, getFavorites, loadFavorites, removeFavoriteGame } from '../actions/game.actions';
import { Game } from '../models/game.model';
import { pipe } from 'rxjs';

@Injectable()
export class GameEffects {
    loadFavorites$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getFavorites),
            pipe(
                map(() => {
                    const favorites = localStorage.getItem('favorites');
                    return favorites ? JSON.parse(favorites) : [];
                }),
                tap((games: Game[]) => {
                    if (games && games.length) {
                        games.forEach((game: Game) => {
                            this.store.dispatch(addFavoriteGame({ game }));
                        });
                    }
                }),
                map((games: Game[]) => {
                    // Transform the games array into an action
                    return { type: '[Favorites] Get Favorites Success', payload: games };
                })
            )
        )
    );

    saveFavorites$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addFavoriteGame, removeFavoriteGame),
                withLatestFrom(this.store.pipe(select((state: any) => state.game.favorites))),
                tap(([action, favorites]) => {
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                })
            ),
        { dispatch: false }
    );


    constructor(
        private actions$: Actions,
        private store: Store
    ) { }
}
