export interface Image {
    size: string,
    "#text": string
}
export interface Track {
    artist: string
    image: Array<Image>,
    listeners: string
    mbid: string
    name: string
    streamable: string
    url: string
}
export interface ResponseSearch {
    'opensearch:Query': {
        '#text': string
        role: string
        startPage: number
    },
    'opensearch:totalResults': number,
    'opensearch:itemsPerPage': number,
    trackmatches: { track: Array<Track> }
}
export interface SearchState {
    data: Array<Track> | null,
    pagination: {
        per_page: number,
        total: number,
        currentPage: number
    },
    searching: boolean,
    error: boolean | null
}



