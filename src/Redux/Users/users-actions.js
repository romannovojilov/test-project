import { GET_PAGE, GET_TOTAL_PAGES, GET_USER_DATA, GET_USERS, TOGGLE_POPUP } from './users-reducer';

export const actions = {
    getUsers: (users) => ({
        type: GET_USERS,
        users
    }),
    getTotalPages: (totalPages) => ({
        type: GET_TOTAL_PAGES,
        totalPages
    }),
    getNewUser: (users) => ({
        type: GET_PAGE,
        users
    }),
    getUserData: (userData) => ({
        type: GET_USER_DATA,
        userData
    }),
    togglePopup: (isPopupOpen) => ({
        type: TOGGLE_POPUP,
        isPopupOpen
    })
};