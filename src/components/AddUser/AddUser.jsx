import React from 'react';
import styles from './AddUser.module.scss';

const AddUser = ({ handleAddNewUser }) => {
    return (
        <div className={ styles.add_user } onClick={ () => handleAddNewUser() }>
            +
        </div>
    );
};

export default AddUser;