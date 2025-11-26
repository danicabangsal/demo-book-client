import React from 'react'
import { Link } from 'react-router-dom';
import bookPic from '../../assets/awardbooks.png'

const PromoBanner = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='mt-16 py-12 bg-[#181A2D] px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
                {/* picture */}
                <div>
                    <img src={bookPic} alt="" className='w-96' />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 leading-snug text-white'>Most Viewed Business Books</h2>
                    <Link
                        to="/shop?query=business"
                        onClick={scrollToTop}
                        className='inline-block bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'
                    >
                        Explore Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner
