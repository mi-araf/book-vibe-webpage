import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
    const { booksId } = useParams();

    const books = useLoaderData();

    const expectedBook = books.find(book => book.bookId == booksId);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    const { handleMarkAsRead, storedBooks } = useContext(BookContext);

    return (
        <div className='my-6 w-11/12 md:w-10/12 mx-auto'>
            <div className="grid grid-cols-2 bg-base-100">
                <figure className='flex items-center justify-center bg-[#F3F3F3] rounded-2xl'>
                    <img src={image} alt={bookName} className='h-108 rounded-2xl' />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title font-bold text-3xl">{bookName}</h2>
                    <p className='card-title'>By: {author}</p>
                    <p className="py-2 border-y">{category}</p>
                    <p>Review: {review}</p>
                    <div className='flex items-center gap-3 '>
                        {
                            tags.map((tag, index) => <div key={index} className="badge bg-[#22be0a1e] text-[#23BE0A]">{tag}</div>)
                        }
                    </div>
                    <div className="border-t space-y-3">
                        <div className='flex justify-between items-center gap-2'>
                            <span>Number of pages: </span> <span>{totalPages}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Publisher: </span> <span>{publisher}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Publishing time: </span> <span>{yearOfPublishing}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span>Rating: </span> <span>{rating}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button onClick={() => handleMarkAsRead(expectedBook)} className='btn'>Mark as read</button>
                            <button className="btn btn-primary">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;