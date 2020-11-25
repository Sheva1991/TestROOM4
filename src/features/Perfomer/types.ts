export interface Image {
    size: string,
    "#text": string
}
export interface perfomerState {
    name: string | null,
    mbid: string | null,
    url: string | null,
    image: Array<Image> | null,
    stats: {
        listeners: number | null,
        playcount: number | null
    }
    tags: {
        tag: Array<Tag>
    } | null
    summary: string | null
    fetching: boolean,
    error: boolean
}

export interface ResponsePerfomer {
    name: string | null,
    mbid: string | null,
    url: string | null,
    image: Array<Image> | null,
    stats: {
        listeners: number | null,
        playcount: number | null
    }
    tags: {
        tag: Array<Tag>
    }
    bio: {
        links: {
            link: {
                '#text': string,
                href: string
            }
        }
        summary: string
    },
}

export interface Tag {
    name: string,
    url: string
}