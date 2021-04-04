import React, { useEffect, useState } from 'react';
import styles from './Paginator.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPages } from '../../Redux/Users/users-reducer';

const Paginator = ({ onPageChanged, paginatorStyles, partSize = 5 }) => {
    const dispatch = useDispatch();
    const { totalPages } = useSelector(state => state);

    const [currentPage, setCurrentPage] = useState(1);
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
        pages.push(i + 1);
    }

    const togglePage = (num) => {
        setCurrentPage(num);
        onPageChanged(num);
    };

    useEffect(() => {
        dispatch(getTotalPages());
    }, []);

    const partCount = Math.ceil(totalPages / partSize);
    const [partNumber, setPartNumber] = useState(1);
    const leftPartPageNumber = (partNumber - 1) * partSize + 1;
    const rightPartPageNumber = partNumber * partSize;

    return (
        <div className={ paginatorStyles }>
            {
                partNumber > 1 &&
                <button className={ styles.page } onClick={ () => setPartNumber(partNumber - 1) }>
                    &#60;
                </button>
            }
            {
                pages.filter(page => page >= leftPartPageNumber && page <= rightPartPageNumber)
                    .map(page =>
                        <button
                            key={ page }
                            className={ `${ styles.page } ${ currentPage === page ? styles.page_selected : '' }` }
                            onClick={ () => togglePage(page) }
                        >
                            { page }
                        </button>
                    )
            }
            {
                partCount > partNumber &&
                <button className={ styles.page } onClick={ () => setPartNumber(partNumber + 1) }>
                    &#62;
                </button>
            }
        </div>
    );
};

export default Paginator;