import { BreadCrumbItem } from "../models/breadcrumb-item";
import { CustomGameFilter, Filter, GameFilter } from "../models/game-filter";
import { Game } from "../models/game.model";
import { NavbarAction } from "../models/navbar-action";
import { SelectItem } from "../models/select-item";

export const breadCrumbItems: BreadCrumbItem[] = [{ label: "Inicio" }, { label: "Tienda" }, { label: "Juegos" }, { label: "Juegos para Nintendo Switch" }];
export const breadCrumbItemsFav: BreadCrumbItem[] = [{ label: "Inicio" }, { label: "Lista de deseos" }];
export const gameSorterItems: SelectItem[] = [{ label: "Destacados", value: null }, { label: "Titulo (A-Z)", value: 'asc' }, { label: "Titulo (Z-A)", value: 'desc' }];
export const headerActions: NavbarAction[] = [
    { id: 'support', label: "Soporte", icon: 'icons/support.svg' },
    { id: 'wishlist', label: "Lista de deseos", icon: 'icons/heart.svg' },
    { id: 'account', label: 'David Hernandez', icon: 'avatar.png' }
];
export const navbarActions: NavbarAction[] = [
    { id: 'games', label: "Juegos", icon: 'icons/game.svg' },
    { id: 'switch', label: "Nintendo Switch", icon: 'icons/switch.svg' },
    { id: 'news', label: 'Noticias y Eventos', icon: 'icons/events.svg' }
];

export const navbarMobileActions: NavbarAction[] = [
    { id: 'menu', label: "Soporte", icon: 'icons/menu.svg' },
    { id: 'wishlist', label: "Lista de deseos", icon: 'icons/heart.svg' },
    { id: 'search', label: 'Search', icon: 'icons/search.svg', main: true },
    { id: 'games', label: 'Games', icon: 'icons/game.svg' },
    { id: 'account', label: 'David Hernandez', icon: 'avatar.png' }
];

export const getDefaultFilters = (games: Game[]): GameFilter[] => {
    return getGameFilterByCriteria(games, 'filters');
}

export const getCustomFilters = (games: Game[]): any[] => {
    return [
        { title: "Funciones de Nintendo Switch", filters: getGameFilterByCriteria(games, 'nsoFeatures') },
        { title: "Genero de Juego", filters: getGameFilterByCriteria(games, 'genres') },
    ];
}

const getGameFilterByCriteria = (games: Game[], criteria: 'filters' | 'genres' | 'nsoFeatures'): GameFilter[] => {
    if (!games || !games.length) return [];

    const filterStringArray: Array<string> = games.reduce((current: string[], game: Game) => {
        return [...current, ...game[criteria].filter((filter: string) => !current.includes(filter))];
    }, []);

    return filterStringArray.map((filterString: string): GameFilter => ({
        id: criteria,
        value: filterString,
        label: filterString
    }))
}

export const sortByProperty = (items: Array<any>, property: string, order?: string) => {
    if (!items.length || !order) return items;

    const sortedArray = [...items];
    sortedArray.sort((a, b) => {
        if (order === 'asc') return (a[property] > b[property]) ? 1 : -1;
        if (order === 'desc') return (a[property] > b[property]) ? -1 : 1;
        return 0;
    });
    return sortedArray;
};

export const getFilterSelection = (filters: Filter): GameFilter[] => {
    return [
        ...filters.default.filter((filter: GameFilter) => filter.checked),
        ...filters.custom.reduce((current: Array<any>, customFilter: CustomGameFilter) => {
            return [...current, ...customFilter.filters.filter((filter: GameFilter) => filter.checked)]
        }, []),
    ];
}

export const clearGameFilters = (filters: Filter): Filter => {
    const clear = (filter: GameFilter) => filter.checked = false;
    filters.default.forEach(clear);
    filters.custom.forEach((customFilter: CustomGameFilter) => customFilter.filters.filter(clear));
    return filters;
}
