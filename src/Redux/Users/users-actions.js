import { SET_USERS } from './users-reducer';

export const actions = {
    getUsers: (users) => ({
        type: SET_USERS,
        users
    })
};