import React from 'react';
import styles from './Popup.module.scss';

const Popup = ({ userData }) => {
    console.log(userData);
    return (
        <div className={ styles.popup }>
            <button className={ styles.close }>x</button>
            {/*{ userData }*/}
            <button className={ styles.action }>Удалить</button>
            <button className={ styles.action }>Сохранить</button>
        </div>
    );
};

export default Popup;