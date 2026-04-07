import React from 'react';
import BooksImg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 w-11/12 md:w-10/12 p-18 mx-auto rounded-2xl my-5">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img src={BooksImg} className=" md:min-w-1/3 rounded-lg shadow-2xl" alt="banner" />
                <div>
                    <h1 className="mt-7 md:mt-0 text-2xl md:text-6xl font-bold">Books to freshen up your bookshelf</h1> <br /><br />
                    <button className="btn btn-green m-5 md:m-0">View the List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;