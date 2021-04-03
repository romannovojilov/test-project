import { usersAPI } from '../../API/users-requests';
import { actions } from './users-actions';

export const SET_USERS = 'SET_USERS';
const initialState = {
    users: [],
    currentPage: 1
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        default: {
            return state;
        }
    }
};

export const getUsers = () => {
    return async (dispatch) => {
        const data = await usersAPI.getUsersRequest().then(res => res);
        dispatch(actions.getUsers(data));
    };
}