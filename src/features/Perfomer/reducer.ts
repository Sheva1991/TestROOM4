import {
    FETCH_PERFOMER_ERROR,
    FETCH_PERFOMER_REQUEST,
    FETCH_PERFOMER_RESPONSE
} from './constants'
import { perfomerState } from "./types";
import { perfomerActions } from "./actions";


const initialState = {
    name: null,
    mbid: null,
    url: null,
    image: null,
    stats: {
        listeners: null,
        playcount: null
    },
    tags: null,
    bio: '',
    summary: null,
    fetching: false,
    error: false
} as perfomerState;

const perfomer = (state: perfomerState = initialState, action: perfomerActions): perfomerState => {
    switch (action.type) {
        case FETCH_PERFOMER_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_PERFOMER_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_PERFOMER_RESPONSE: {
            const {
                name, image, stats, bio, tags
            } = action.payload
            return {
                ...state,
                name,
                image,
                stats,
                tags,
                summary: bio.summary,
                fetching: false,
                error: false,
            }
        }
        default:
            return state;
    }
}


export default perfomer;

