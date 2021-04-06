import React from 'react';
import styles from './AddUser.module.scss';
// это абстрактная кнопка не имеющая бизнес логику, а ты назвал не так, будто в ней обработка добавления пользователя хранится
const AddButton = ({ onClick, ...props }) => {
    return (
        <button className={ styles.add_user } onClick={onClick} type="button" {...props}>
            +
        </button>
    );
};

export default AddButton;
