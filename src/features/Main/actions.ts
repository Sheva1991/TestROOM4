import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_RESPONSE
} from './constants'
import { ResponseMain } from './types';
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
export const fetchRequest = createAction<typeof FETCH_REQUEST>(FETCH_REQUEST);
export const fetchError = createAction<typeof FETCH_ERROR>(FETCH_ERROR);
export const fetchResponse = createActionWithPayload<typeof FETCH_RESPONSE, ResponseMain>(FETCH_RESPONSE);


export const fetchTopTracks = (page: number, per_page: number): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchRequest())
    try {
        const { data: { tracks } } = await API.get<{ tracks: ResponseMain }>('/', {
            params: {
                method: 'tag.gettoptracks',
                tag: 'disco',
                limit: 10,
                page,
                per_page
            }
        });
        dispatch(fetchResponse(tracks));
    } catch {
        dispatch(fetchError())
    }
}

export type MainActions =
    | ReturnType<typeof fetchRequest>
    | ReturnType<typeof fetchError>
    | ReturnType<typeof fetchResponse>