import axios from 'axios';

//! const serverUrl = 'http://localhost:8080';
const jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com/posts/';

//! Using JSON Placeholder right now

export default {
    getAllEntries: () => {
        return axios.get(jsonPlaceholderUrl);
    },
    getEntryById: (id) => {
        return axios.get(jsonPlaceholderUrl + id)
    },
    createNew: (data, headers) => {
        return axios.post(jsonPlaceholderUrl, data, headers)
    }
}