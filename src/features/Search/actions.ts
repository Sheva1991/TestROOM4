import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    SEARCH_ERROR,
    SEARCH_REQUEST,
    SEARCH_RESPONSE
} from './constants'
import { ResponseSearch } from './types';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
export const searchRequest = createAction<typeof SEARCH_REQUEST>(SEARCH_REQUEST);
export const searchError = createAction<typeof SEARCH_ERROR>(SEARCH_ERROR);
export const searchResponse = createActionWithPayload<typeof SEARCH_RESPONSE, ResponseSearch>(SEARCH_RESPONSE);


export const searchTrack = (page: number, per_page: number, trackName: string): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(searchRequest())

    try {
        const { data: { results } } = await API.get<{ results: ResponseSearch }>('/', {
            params: {
                method: 'track.search',
                track: trackName,
                limit: 10,
                page,
                per_page
            }
        });
        dispatch(searchResponse(results));
    } catch {
        dispatch(searchError())
    }
}

export type MainActions =
    | ReturnType<typeof searchRequest>
    | ReturnType<typeof searchError>
    | ReturnType<typeof searchResponse>