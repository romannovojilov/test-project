import {
    DELETE_USER,
    GET_PAGE,
    GET_TOTAL_PAGES,
    GET_USER_DATA,
    GET_USERS,
    SET_USER_DATA, TOGGLE_IS_FETCHING,
    TOGGLE_POPUP
} from './users-reducer';

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
    togglePopup: () => ({
        type: TOGGLE_POPUP
    }),
    setUserData: (userData) => ({
        type: SET_USER_DATA,
        userData
    }),
    deleteUser: (userId) => ({
        type: DELETE_USER,
        userId
    }),
    toggleIsFetching: (isFetching) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    })
};