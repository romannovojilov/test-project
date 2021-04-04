import { usersAPI } from '../../API/users-requests';
import { actions } from './users-actions';

export const GET_USERS = 'SET_USERS';
export const GET_PAGE = 'SET_PAGE';
export const GET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

const initialState = {
    users: [],
    totalPages: 0
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