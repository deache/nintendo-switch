import { createReducer, on } from '@ngrx/store';
import { addFavoriteGame, removeFavoriteGame } from '../actions/game.actions';
import { Game } from '../models/game.model';

export interface GameState {
    favorites: Game[];
}

export const initialState: GameState = {
    favorites: [],
};

export const gameReducer = createReducer(
    initialState,
    on(addFavoriteGame, (state, { game }) => ({
        ...state,
        favorites: [...state.favorites, game].reduce((_favorites: Game[], current: Game) => {
            if (!_favorites.find((game: Game) => game.nsuid === current.nsuid)) _favorites.push(current);
            return _favorites;
        }, [])
    })),
    on(removeFavoriteGame, (state, { gameId }) => ({
        ...state,
        favorites: state.favorites.filter((game) => game.nsuid !== gameId),
    }))
);