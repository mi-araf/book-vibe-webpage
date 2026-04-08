import React from 'react';
import { CiStar } from "react-icons/ci";

const BookCard = ({ book }) => {
    return (
        <div>
            <div key={book.bookId} className="card rounded-2xl shadow-sm">
                <figure className='py-6 mx-6 mt-5 rounded-2xl bg-[#F3F3F3]'>
                    <img src={book.image} alt={book.bookName} className='rounded-2xl h-41' />
                </figure>
                <div className="card-body">
                    <div className="flex items-center gap-3 my-1">
                        {book.tags.map((tag, index) => <div key={index} className="badge bg-[#22be0a1e] text-[#23BE0A]">{tag}</div>)}
                    </div>
                    <h2 className="card-title font-bold text-2xl'">{book.bookName}</h2>
                    <p className='font-semibold text-lg'>{book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-lg">
                        <div className="font-semibold hello">{book.category}</div>
                        <div className="font-semibold flex items-center gap-2">{book.rating} <CiStar /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;