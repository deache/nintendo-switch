export interface Game {
    nsuid: string;
    sku: string;
    galery: Array<any>,
    title: string,
    releaseDate: string,
    prices: any,
    priceRange: string,
    platform: string,
    filters: Array<any>,
    availability: Array<any>,
    genres: Array<any>,
    topLevelFilters: Array<any>,
    nsoFeatures: Array<any>,
    productImage: string,
    isFavorite?: boolean
}

