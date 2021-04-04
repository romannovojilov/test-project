import fetchAPI from './API';

export const usersAPI = {
    getUsersRequest() {
        return fetchAPI('users', 'GET').then(resp => resp.json()).then(resp => resp);
    },
    getUsersOnPageRequest(pageNum) {
        return fetchAPI(`users?page=${pageNum}`).then(resp => resp.json()).then(resp => resp);
    },
    getUserDataRequest(userId) {
        return fetchAPI(`users/${userId}`).then(resp => resp.json()).then(resp => resp);
    },
    setUserData(userId, data) {
        return fetchAPI(`users/${userId}`, 'PUT', data).then(resp => resp.json()).then(resp => resp);
    },
    deleteUser(userId) {
        return fetchAPI(`users/${userId}`, 'DELETE').then(resp => resp);
    }
};