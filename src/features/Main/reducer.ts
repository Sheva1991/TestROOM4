import { MainState } from './types';
import {
    FETCH_REQUEST,
    FETCH_ERROR,
    FETCH_RESPONSE,
} from './constants'
import { MainActions } from './actions';


const initialState = {
    data: null,
    pagination: {
        per_page: 10,
        total: 0,
        currentPage: 1
    },
    fetching: false,
    error: null
} as MainState;

const main = (state: MainState = initialState, action: MainActions): MainState => {
    switch (action.type) {
        case FETCH_REQUEST: {
            return { ...state, fetching: true, error: false }
        }

        case FETCH_ERROR: {
            return { ...state, fetching: false, error: true }
        }

        case FETCH_RESPONSE: {
            const { '@attr': { page, perPage, total }, track
            } = action.payload
            return {
                ...state,
                fetching: false,
                error: false,
                data: track,
                pagination: {
                    per_page: +perPage,
                    total: +total,
                    currentPage: +page
                }
            }
        }
        default:
            return state;
    }
}


export default main;

