import {ADD_BOOK, CLEAR_ERRORS, LOADING_UI, SET_BOOKS, SET_ERRORS, SET_TOTAL_BOOKS_COUNT} from "../types";
import {booksAPI} from "../../api/api";
import axios from "axios";

export const getBooks = (title) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.get(`?q=${title}`)
        .then(res => {
            dispatch({type: SET_BOOKS, payload: res.data.items});
            dispatch({type: SET_TOTAL_BOOKS_COUNT, payload: res.data.totalItems});
            dispatch({type: CLEAR_ERRORS});
        })
}

/*
export const addElement = (el) => (dispatch) => {
    debugger;
    dispatch({type: ADD_BOOK, item: el});
}*/

export const addElement = (el) => ({type: ADD_BOOK, item: el});