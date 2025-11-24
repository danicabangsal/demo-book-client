import React from 'react'
import { useLoaderData } from 'react-router-dom'

import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

const SignleBook = () => {
    const data = useLoaderData();
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = data;
    console.log(data)
    return (
        <div className='mt-20'>
            <Banner>
                <div className=" z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-2xl font-normal text-black">
                            <MdAnnouncement className='me-2 text-red-600' />
                            <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>

            {/* book details */}
            <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 px-4 py-12'>
                <div className='flex justify-center relative'>
                    <img
                        src={imageURL}
                        alt={`Cover of ${bookTitle}`}
                        className='rounded-xl shadow-lg w-full max-w-md object-cover'
                    />
                    <span className='absolute bottom-4 left-4 bg-white/90 text-green-600 text-xs uppercase tracking-[0.3em] px-3 py-1 rounded shadow'>
                        Digital loan available
                    </span>
                </div>

                <div className='space-y-6'>
                    <div>
                        <p className='text-sm uppercase tracking-widest text-blue-600 mb-2'>{category}</p>
                        <h2 className='text-4xl font-bold text-gray-900'>{bookTitle}</h2>
                        <p className='text-lg text-gray-600 mt-2'>by {authorName}</p>
                    </div>

                    <div className='prose max-w-none text-gray-700 leading-relaxed'>
                        {bookDescription || 'No description provided for this book.'}
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        {bookPDFURL && (
                            <a
                                href={bookPDFURL}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-8 py-4 bg-[#181A2D] text-white font-semibold rounded-lg shadow border-2 border-transparent transition-all duration-300 ease-out hover:scale-105 hover:border-[#ED6404] hover:bg-[#1f2138] hover:shadow-xl hover:opacity-95'
                            >
                                Read Sample / Download
                            </a>
                        )}
                        <button
                            className='px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors'
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignleBook
