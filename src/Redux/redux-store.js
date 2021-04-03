import { applyMiddleware, createStore } from 'redux';
import { usersReducer } from './Users/users-reducer';
import thunk from "redux-thunk"

export const store = createStore(usersReducer, applyMiddleware(thunk));
console.log('store: ', store.getState());