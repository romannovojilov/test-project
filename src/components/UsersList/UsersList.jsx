import React, { useEffect } from 'react';
import styles from './UsersList.module.scss';
import User from '../User/User';
import { useDispatch, useSelector } from 'react-redux';
import { getPage, getUserData, getUsers } from '../../Redux/Users/users-reducer';
import Paginator from '../Paginator/Paginator';
import AddUser from '../AddUser/AddUser';
import Popup from '../Popup/Popup';
import { actions } from '../../Redux/Users/users-actions';

const UsersList = () => {
    const users = useSelector(state => state.users);
    const isPopupOpen = useSelector(state => state.isPopupOpen);
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const onPageChanged = (num) => {
        dispatch(getPage(num));
    };

    const onGetUserData = (userId) => {
        dispatch(actions.togglePopup(!isPopupOpen));
        dispatch(getUserData(userId));
    };

    const cards = users.map(user => {
        const { id, first_name, last_name, avatar, email } = user;
        return <User
            key={ id }
            className={ styles.user }
            firstName={ first_name }
            lastName={ last_name }
            avatar={ avatar }
            email={ email }
            onGetUserData={ onGetUserData }
        />;
    });
    return (
        <div className={ styles.users_list }>
            { cards }
            <AddUser />
            <Paginator paginatorStyles={ styles.paginator } onPageChanged={ onPageChanged } />
            { isPopupOpen && <Popup userData={ userData } /> }
        </div>
    );
};

export default UsersList;