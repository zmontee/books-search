import {ADD_BOOK, SET_BOOKS, SET_TOTAL_BOOKS_COUNT} from "../types";

const initialState = {
    books: [],
    totalBooksCount: 0
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case SET_TOTAL_BOOKS_COUNT:
            return {
                ...state,
                totalBooksCount: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.item]
            }
        default:
            return state
    }
}