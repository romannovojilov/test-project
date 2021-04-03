import React from 'react';
import styles from './Area.module.scss';

const Area = ({ children }) => {
    return (
        <div className={ styles.area }>
            { children }
        </div>
    );
};

export default Area;