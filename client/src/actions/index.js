import axios from 'axios';

const API_URL = 'http://localhost:3002/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
})

// LOAD PHONEBOOK

export const loadPhonebookSuccess = (phonebooks) => ({
    type: 'LOAD_PHONEBOOK_SUCCESS',
    phonebooks
})

export const loadPhonebookFailure = () => ({
    type: 'LOAD_PHONEBOOK_FAILURE'
})

export const loadPhonebook = () => {
    return dispatch => {
        return request.get('phonebooks')
        .then(function(response) {
            dispatch(loadPhonebookSuccess(response.data));
        })
        .catch(function(error) {
            console.error(error);
            dispatch(loadPhonebookFailure);
        })
    }
}

// POST PHONEBOOK

export const postPhonebookSuccess = (phonebook) => ({
    type: 'POST_PHONEBOOK_SUCCESS', phonebook
})

export const postPhonebookFailure = () => ({
    type: 'POST_PHONEBOOK_FAILURE'
})

const postPhonebookRedux = (name, phone) => ({
    type: 'POST_PHONEBOOK', name, phone
})

export const postPhonebook = (name, phone) => {
    return dispatch => {
        dispatch(postPhonebookRedux(name,phone));
        return request.post('phonebooks',{name,phone})
        .then(function(response) {
            dispatch(postPhonebookSuccess(response.data.data));
        })
        .catch(function(error) {
            console.error(error);
            dispatch(postPhonebookFailure());
        })
    }
}

// DELETE PHONEBOOK

const deletePhonebookRedux = (id) => ({
    type: 'DELETE_PHONEBOOK', id
})

export const deletePhonebookSuccess = (phonebook) => ({
    type: 'DELETE_PHONEBOOK_SUCCESS', phonebook
})

export const deletePhonebookFailure = () => ({
    type: 'DELETE_PHONEBOOK_FAILURE'
})

export const deletePhonebook = (id) => {
    return dispatch => {
        dispatch(deletePhonebookRedux(id));
        return request.delete(`phonebooks/${id}`)
        .then(function (response) {
            dispatch(deletePhonebookSuccess(response.data.data));
        })
        .catch(function (error) {
            console.error(error);
            dispatch(deletePhonebookFailure());
        })
    }
}
