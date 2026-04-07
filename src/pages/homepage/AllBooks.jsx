import React from 'react';
import { use } from 'react';
import BookCard from '../../components/shared/BookCard';

const bookPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise);
    console.log(books);

    return (
        <div className='my-12 w-11/12 md:w-10/12 mx-auto'>
            <h2 className='font-bold text-3xl text-center'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-7'>
                {
                    books.map(book => {
                        return (
                            <BookCard key={book.bookId} book={book}></BookCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;