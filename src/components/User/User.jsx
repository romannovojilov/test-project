import React from 'react';
import styles from './User.module.scss';

const User = (props) => {
    const { id, firstName, lastName, avatar, onGetUserData } = props;

    return (
        <div className={ `${ styles.card } ${ props.className }` } onClick={ () => onGetUserData(id) }>
            <img className={ styles.avatar } src={ avatar } alt="avatar" />
            <span className={ styles.name }>{ `${ firstName } ${ lastName }` }</span>
        </div>
    );
};

export default User;