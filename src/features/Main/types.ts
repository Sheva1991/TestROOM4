export interface Image {
    size: string,
    "#text": string
}
export interface Artist {
    mbid: string,
    name: string
    url: string
}
export interface Track {
    name: 'string',
    image: Array<Image>,
    artist: Artist,
    url: string
}
export interface ResponseMain {
    '@attr': {
        tag: string,
        page: number,
        perPage: number,
        totalPages: number,
        total: number
    },
    track: Array<Track>
}
export interface MainState {
    data: Array<Track> | null,
    pagination: {
        per_page: number,
        total: number,
        currentPage: number
    },
    fetching: boolean,
    error: boolean | null
}



