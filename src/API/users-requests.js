import fetchAPI from './API';

export const usersAPI = {
    getUsersRequest() {
        return fetchAPI('users', 'GET').then(resp => resp.json()).then(resp => resp);
    },
    getUsersOnPageRequest(pageNum) {
        return fetchAPI(`users?page=${pageNum}`).then(resp => resp.json()).then(resp => resp);
    }
};