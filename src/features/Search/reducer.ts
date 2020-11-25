import { SearchState } from './types';
import {
    SEARCH_REQUEST,
    SEARCH_ERROR,
    SEARCH_RESPONSE,
} from './constants'
import { MainActions } from './actions';


const initialState = {
    data: null,
    pagination: {
        per_page: 10,
        total: 0,
        currentPage: 1
    },
    searching: false,
    error: null
} as SearchState;

const search = (state: SearchState = initialState, action: MainActions): SearchState => {
    switch (action.type) {
        case SEARCH_REQUEST: {
            return { ...state, searching: true, error: false }
        }

        case SEARCH_ERROR: {
            return { ...state, searching: false, error: true }
        }

        case SEARCH_RESPONSE: {
            const { 'opensearch:Query': { startPage }, 'opensearch:totalResults': total,
                'opensearch:itemsPerPage': perPage, trackmatches
            } = action.payload
            return {
                ...state,
                searching: false,
                error: false,
                data: trackmatches.track,
                pagination: {
                    per_page: +perPage,
                    total: +total,
                    currentPage: +startPage
                }
            }
        }
        default:
            return state;
    }
}


export default search;

