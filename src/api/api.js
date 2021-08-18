import axios from 'axios';

export const booksAPI = {
    getBooks(title) {
        return axios.get(`?q=${title}`);
    }
}