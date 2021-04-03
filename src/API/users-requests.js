import fetchAPI from './API';

export const usersAPI = {
    getUsersRequest() {
        return fetchAPI('users', 'GET').then(response => response.json()).then(resp => resp.data);
    }
};