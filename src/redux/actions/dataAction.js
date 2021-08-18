import {CLEAR_ERRORS, LOADING_UI, SET_BOOKS, SET_TOTAL_BOOKS_COUNT} from "../types";
import {booksAPI} from "../../api/api";

export const getBooks = (title) => (dispatch) => {
    dispatch({type: LOADING_UI});
    booksAPI.getBooks(title)
        .then(res => {
            dispatch({type: SET_BOOKS, payload: res.data.items});
            dispatch({type: SET_TOTAL_BOOKS_COUNT, payload: res.data.totalItems});
            dispatch({type: CLEAR_ERRORS});
        })
}