import { API_URL_CATS } from "../constants";
import * as types from './types'

export const getGists = () => ({
    type: types.GET_GISTS,
})

export const getGistsRequest = () => ({
    type: types.GET_GISTS_REQUEST,
})

export const getGistsSuccess = (data) => ({
    type: types.GET_GISTS_SUCCESS,
    payload: data,
})

export const getGistsFailure = (err) => ({
    type: types.GET_GISTS_FAILURE,
    payload: err,
})

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest())

    try {
        const res = await fetch(API_URL_CATS)

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`)
        }
        const result = await res.json()
        dispatch(getGistsSuccess(result))
    } catch (err) {
        dispatch(getGistsFailure(err.message))
    }
}
