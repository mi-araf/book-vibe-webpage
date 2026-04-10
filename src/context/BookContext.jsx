import React, { Children, createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (bookId) => {
        // step 1: get/store book id from the url
        // step 2: where to store : the local storage
        // step 3: array or collection
        // step 3.2: if book exist then show a toast
        // step 4: else add it
        const isExistBook = storedBooks.find(id => id == bookId);
        if (isExistBook) {
            alert('Already read this book');
        } else {
            setStoredBooks([...storedBooks, bookId]);
            alert('You have successfully added this book');
        }
    };

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead
    }

    return <BookContext.Provider value={data} >
        {children}
    </BookContext.Provider>
};


export default BookProvider;