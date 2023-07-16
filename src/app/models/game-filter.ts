export type Filter = {
    default: Array<GameFilter>,
    custom: Array<CustomGameFilter>,
}

export type GameFilter = {
    id: 'genres' | 'filters' | 'nsoFeatures',
    label: string,
    checked?: boolean,
    value?: any;
}

export type CustomGameFilter = {
    title: string,
    filters: Array<GameFilter>,
    collapsed?: boolean
}
