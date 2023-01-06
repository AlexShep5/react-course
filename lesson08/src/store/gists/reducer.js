import { STATUSES } from "../constants";
import * as types from "./types"

const initialState = {
    gistsList: [],
    request: STATUSES.IDLE,
    error: null,
    loading: false
}

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: true,
                error: null
            }
        case types.GET_GISTS_SUCCESS:
            return {
                ...state,
                gistsList: action.payload,
                request: STATUSES.SUCCESS,
                loading: false
            }
            case types.GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload
            }
        default:
            return state
    }
}
