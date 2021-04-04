import { GET_PAGE, GET_TOTAL_PAGES, GET_USERS } from './users-reducer';

export const actions = {
    getUsers: (users) => ({
        type: GET_USERS,
        users
    }),
    getTotalPages: (totalPages) => ({
        type: GET_TOTAL_PAGES,
        totalPages
    }),
    getPageUsers: (users) => ({
        type: GET_PAGE,
        users
    })
};