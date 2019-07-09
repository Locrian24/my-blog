import axios from 'axios';

export default {
    getAllEntries: () => {
        return axios.get('/api/client/');
    },
    getEntryById: id => {
        return axios.get('/api/client/' + id);
    },
    createNew: (data, headers) => {
        return axios.post('/api/edits/', data, headers);
    },
    updateEntry: (id, data, headers) => {
        return axios.put('/api/edits/' + id, data, headers);
    },
    delete: (id, headers) => {
        return axios.delete('/api/edits/' + id, headers);
    }
};
