import {CLEAR_ERRORS, LOADING_UI, SET_ERRORS} from "../types";

const initialState = {
    loading: false,
    errors: {}
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}