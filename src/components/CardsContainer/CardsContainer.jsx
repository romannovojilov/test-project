import React, { useEffect } from 'react';
import styles from './CardsContainer.module.scss';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/Users/users-reducer';

const CardsContainer = () => {
    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const cards = users.map(user => {
        const {id, first_name, last_name, avatar, email} = user;
        return <Card
            key={ id }
            className={ styles.card }
            firstName={ first_name }
            lastName={ last_name }
            avatar={ avatar }
            email={ email }
        />;
    });
    return (
        <div className={ styles.cards_container }>
            { cards }
        </div>
    );
};

export default CardsContainer;