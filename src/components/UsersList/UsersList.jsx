import React, { useEffect } from 'react';
import styles from './UsersList.module.scss';
import User from '../User/User';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, getPage, getUserData, getUsers, togglePopup } from '../../Redux/Users/users-reducer';
import Paginator from '../Paginator/Paginator';
import AddUser from '../AddUser/AddUser';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';

const UsersList = () => {
    const isFetching = useSelector(state => state.isFetching);
    const users = useSelector(state => state.users);
    const isPopupOpen = useSelector(state => state.isPopupOpen);
    const userData = useSelector(state => state.userData.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const onPageChanged = (num) => {
        dispatch(getPage(num));
    };

    const onGetUserDataHandler = (userId) => {
        dispatch(togglePopup());
        dispatch(getUserData(userId));
    };

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
    };

    const handleAddNewUser = () => {
        dispatch(addUser());
    };

    const cards = users.map(user => {
        const { id, first_name, last_name, avatar } = user;
        return <User
            key={ id }
            className={ styles.user }
            id={ id }
            firstName={ first_name }
            lastName={ last_name }
            avatar={ avatar }
            onGetUserData={ onGetUserDataHandler }
        />;
    });
    return (
        <div className={ styles.users_list }>
            {
                isFetching
                    ? <Preloader />
                    : <>
                        { cards }
                        <AddUser handleAddNewUser={ handleAddNewUser } />
                    </>
            }
            <Paginator paginatorStyles={ styles.paginator } onPageChanged={ onPageChanged } />
            { isPopupOpen && userData && <Popup userData={ userData } handleDeleteUser={ handleDeleteUser } /> }
        </div>
    );
};

export default UsersList;