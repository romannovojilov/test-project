import React, { useEffect } from 'react';
import styles from './UsersList.module.scss';
import User from '../User/User';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/Users/users-reducer';
import Paginator from '../Paginator/Paginator';
import AddUser from '../AddUser/AddUser';

const UsersList = () => {
    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const cards = users.map(user => {
        const { id, first_name, last_name, avatar, email } = user;
        return <User
            key={ id }
            className={ styles.user }
            firstName={ first_name }
            lastName={ last_name }
            avatar={ avatar }
            email={ email }
        />;
    });
    return (
        <div className={ styles.users_list }>
            { cards }
            <AddUser />
            <Paginator />
        </div>
    );
};

export default UsersList;