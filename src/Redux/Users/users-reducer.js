import { usersAPI } from '../../API/users-requests';
import { actions } from './users-actions';

export const GET_USERS = 'SET_USERS';
export const GET_PAGE = 'SET_PAGE';
export const GET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const ADD_NEW_USER = 'ADD_USER';
export const GET_USER_DATA = 'EDIT_USER_INFO';
export const TOGGLE_POPUP = 'TOGGLE_POPUP';

const initialState = {
    users: [],
    totalPages: 0,
    userData: {},
    isPopupOpen: false
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
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
                users: action.users
            }
        }
        case GET_USER_DATA: {
            return {
                ...state,
                userData: action.userData
            }
        }
        case TOGGLE_POPUP: {
            return {
                ...state,
                isPopupOpen: state.isPopupOpen
            }
        }
        default: {
            return state;
        }
    }
};

export const getUsers = () => {
    return async (dispatch) => {
        const data = await usersAPI.getUsersRequest().then(resp => resp.data);
        dispatch(actions.getUsers(data));
    };
};

export const getPage = (pageNum) => {
    return async (dispatch) => {
        const data = await usersAPI.getUsersOnPageRequest(pageNum).then(resp => resp.data);
        dispatch(actions.getUsers(data));
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
        const userData = await usersAPI.getUserDataRequest(userId).then(resp => resp);
        console.log(userData);
        dispatch(actions.getUserData(userData));
    };
}