import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    const { firstName, lastName, avatar } = props;
    return (
        <div className={ `${ styles.card } ${ props.className }` }>
            <img className={ styles.avatar } src={ avatar } alt="" />
            <span className={ styles.name }>{ `${ firstName } ${ lastName }` }</span>
        </div>
    );
};

export default Card;