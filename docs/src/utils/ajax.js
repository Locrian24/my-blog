import axios from 'axios';

const serverUrl = 'http://localhost:8080';

//! Using JSON Placeholder right now

export default {
    getAllEntries: () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts/');
    },
    getEntryById: (id) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    }
}