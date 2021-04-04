import React from 'react';
import styles from './Preloader.module.scss';
import image from './Preloader.svg';

const Preloader = () => {
    return (
        <div className={ styles.preloader }>
            <img src={ image } alt="preloader" />
        </div>
    );
};

export default Preloader;