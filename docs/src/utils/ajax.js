import axios from 'axios';

const serverUrl = 'http://localhost:8080';
// const jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com/posts/';

//! Using JSON Placeholder right now

export default {
    getAllEntries: () => {
        return axios.get(serverUrl + '/client/');
    },
    getEntryById: id => {
        return axios.get(serverUrl + '/client/' + id);
    },
    createNew: (data, headers) => {
        return axios.post(serverUrl + '/edits/', data, headers);
    },
    updateEntry: (id, data, headers) => {
        return axios.put(serverUrl + '/edits/' + id, data, headers);
    },
    delete: (id, headers) => {
        return axios.delete(serverUrl + '/edits/' + id, headers);
    }
};
