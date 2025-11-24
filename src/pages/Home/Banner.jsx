import React, { useState } from 'react'
import BannerCard from '../shared/BannerCard'
import { useNavigate } from 'react-router-dom'

export const Banner = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        const query = searchInput.trim();
        if (query) {
            navigate(`/shop?query=${encodeURIComponent(query)}`);
        } else {
            navigate('/shop');
        }
    }

    return (
        <div className=' bg-teal-100  px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-teal-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Donate and view new <span className='text-blue-700'> Books!</span></h1>
                    <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on LBMS.</p>
                    <form onSubmit={handleSearch} className='flex'>
                        <input
                            type="search"
                            placeholder='Search a book here'
                            className='py-2 px-3 rounded-l-md flex-1'
                            value={searchInput}
                            onChange={(event) => setSearchInput(event.target.value)}
                        />
                        <button
                            type='submit'
                            className='bg-blue-700 px-6 py-2 text-white font-medium rounded-r-md hover:bg-black transition-all ease-in duration-200'
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
