import React from 'react';
import styles from './User.module.scss';

const User = (props) => {
    const { firstName, lastName, avatar } = props;
    return (
        <div className={ `${ styles.card } ${ props.className }` }>
            <img className={ styles.avatar } src={ avatar } alt="" />
            <span className={ styles.name }>{ `${ firstName } ${ lastName }` }</span>
        </div>
    );
};

export default User;