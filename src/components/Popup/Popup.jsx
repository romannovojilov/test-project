import React, { useState } from 'react';
import styles from './Popup.module.scss';
import { saveUserData, togglePopup } from '../../Redux/Users/users-reducer';
import { useDispatch } from 'react-redux';

const Popup = ({ userData, handleDeleteUser }) => {
    const { id, avatar, first_name, last_name, email } = userData;
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ first_name: first_name, last_name: last_name, email: email });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePopup = () => {
        dispatch(togglePopup());
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(saveUserData(id, formData));
    };

    return (
        <div className={ styles.popup }>
            <button className={ styles.close } onClick={ () => handleTogglePopup() }>x</button>
            <form onSubmit={ (e) => {
                handleFormSubmit(e);
                handleTogglePopup();
            }}>
                <img src={ avatar } alt="avatar" className={ styles.avatar } />
                <input type="text" name='first_name' defaultValue={ first_name } className={ styles.input } onChange={ handleChange } />
                <input type="text" name='last_name' defaultValue={ last_name } className={ styles.input } onChange={ handleChange } />
                <input type="text" name='email' defaultValue={ email } className={ styles.input } onChange={ handleChange } />
                <button className={ `${styles.action} ${styles.action_save}` }>Сохранить</button>
            </form>
            <button className={ `${styles.action} ${styles.action_delete}` } onClick={ () => {
                handleDeleteUser(id);
                handleTogglePopup();
            }}>Удалить</button>
        </div>
    );
};

export default Popup;