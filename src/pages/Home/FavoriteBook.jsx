import React from 'react'
import favBook from '../../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavoriteBook = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={favBook} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='space-y-6 md:w-1/2'>
            <h2 className='text-5xl my-5 font-bold md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-600'>Book For Free!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Borrowing at your fingertips!</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
              <div>
                <h3 className='text-3xl font-bold '>20+</h3>
                <p className='text-base'>Book Listing</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>10+</h3>
                <p className='text-base'>Registered Users</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold '>30</h3>
                <p className='text-base'>Pdfs Downloaded</p>
              </div>
            </div>
            <Link to="/shop" onClick={scrollToTop} className='block mt-8'>
              <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explore Now</button>
            </Link>
        </div>
    </div>
  )
}

export default FavoriteBook
