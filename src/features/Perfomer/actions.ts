import { Action } from 'redux'
import { ThunkAction } from "redux-thunk";
import {
    FETCH_PERFOMER_ERROR,
    FETCH_PERFOMER_REQUEST,
    FETCH_PERFOMER_RESPONSE
} from './constants'
import { createAction, createActionWithPayload } from "utils/redux";
import { RootState } from "app/store";
import API from 'api/api';
import { ResponsePerfomer } from './types';
export const fetchPerfomersRequest = createAction<typeof FETCH_PERFOMER_ERROR>(FETCH_PERFOMER_ERROR);
export const fetchPerfomersError = createAction<typeof FETCH_PERFOMER_REQUEST>(FETCH_PERFOMER_REQUEST);
export const fetchPerfomersResponse = createActionWithPayload<typeof FETCH_PERFOMER_RESPONSE, ResponsePerfomer>(FETCH_PERFOMER_RESPONSE);

export const fetchPerfomer = (name: string): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
    dispatch(fetchPerfomersRequest())
    try {
        const { data: { artist } } = await API.get<{ artist: ResponsePerfomer }>(`/`, {
            params: {
                method: 'artist.getinfo',
                artist: name,
            }
        });
        dispatch(fetchPerfomersResponse(artist));
    } catch {
        dispatch(fetchPerfomersError())
    }
}

export type perfomerActions =
    | ReturnType<typeof fetchPerfomersRequest>
    | ReturnType<typeof fetchPerfomersError>
    | ReturnType<typeof fetchPerfomersResponse>