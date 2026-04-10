import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
    const { storedBooks } = useContext(BookContext);

    return (
        <div>
            Books
        </div>
    );
};

export default Books;