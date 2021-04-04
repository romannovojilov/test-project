import { usersAPI } from '../../API/users-requests';
import { actions } from './users-actions';
import { act } from '@testing-library/react';

export const GET_USERS = 'SET_USERS';
export const GET_PAGE = 'SET_PAGE';
export const GET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';
export const TOGGLE_POPUP = 'TOGGLE_POPUP';
export const DELETE_USER = 'DELETE_USER';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    totalPages: 0,
    userData: {},
    isPopupOpen: false,
    isFetching: false
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case GET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case GET_TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.totalPages
            };
        }
        case ADD_NEW_USER: {
            return {
                ...state,
                users: [...state.users, action.userData]
            };
        }
        case GET_USER_DATA: {
            return {
                ...state,
                userData: action.userData
            };
        }
        case SET_USER_DATA: {
            return {
                ...state,
                userData: action.userData
            };
        }
        case TOGGLE_POPUP: {
            return {
                ...state,
                isPopupOpen: !state.isPopupOpen
            };
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            };
        }
        default: {
            return state;
        }
    }
};

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        const data = await usersAPI.getUsersRequest().then(resp => resp.data);
        dispatch(actions.getUsers(data));
        dispatch(actions.toggleIsFetching(false));
    };
};

export const getPage = (pageNum) => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        const data = await usersAPI.getUsersOnPageRequest(pageNum).then(resp => resp.data);
        dispatch(actions.getUsers(data));
        dispatch(actions.toggleIsFetching(false));
    };
};

export const getTotalPages = () => {
    return async (dispatch) => {
        const totalPages = await usersAPI.getUsersOnPageRequest().then(resp => resp.total);
        dispatch(actions.getTotalPages(totalPages));
    };
};
export const getUserData = (userId) => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        const userData = await usersAPI.getUserDataRequest(userId).then(resp => resp);
        dispatch(actions.getUserData(userData));
        dispatch(actions.toggleIsFetching(false));
    };
};

export const togglePopup = () => {
    return (dispatch) => {
        dispatch(actions.togglePopup());
    };
};

export const saveUserData = (userId, data) => {
    return async (dispatch) => {
        const userData = await usersAPI.setUserDataRequest(userId, data).then(resp => resp);
        dispatch(actions.setUserData(userData));
    };
};

export const deleteUser = (userId) => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        const result = await usersAPI.deleteUserRequest(userId).then(resp => resp.ok);
        if (result) {
            dispatch(actions.deleteUser(userId));
        }
        dispatch(actions.toggleIsFetching(false));
    };
};

export const addUser = (userData) => {
    return async (dispatch) => {
        const result = await usersAPI.addUserRequest(userData).then(resp => resp.ok);
        console.log(result);
        if (result) {
            dispatch(actions.addUser(userData));
        }
    };
}