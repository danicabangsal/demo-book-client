import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    reviewer: 'Harper Lee',
    book: 'The Silent Library',
    rating: 5,
    quote: 'A gripping story with heart. I devoured it in a single sitting.',
  },
  {
    id: 2,
    reviewer: 'Nikhil Sharma',
    book: 'Algorithms of Hope',
    rating: 4,
    quote: 'Smart, thoughtful, and surprisingly moving. Perfect weekend read.',
  },
  {
    id: 3,
    reviewer: 'Amelia Torres',
    book: 'Letters from the Lighthouse',
    rating: 5,
    quote: 'Beautifully written and full of atmosphere. Highly recommend.',
  },
  {
    id: 4,
    reviewer: 'Devon Brooks',
    book: 'City of Echoes',
    rating: 3,
    quote: 'Strong characters and pacing, though the ending left me wanting more.',
  },
]

const Blog = () => {
  const {loading } = useContext(AuthContext);

  if(loading) {
    return <div className='text-center mt-28'>
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  }


  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reader Reviews</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Honest thoughts from our community about their latest reads.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {reviews.map((review) => (
              <article key={review.id} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase text-gray-500">Book</p>
                    <h3 className="text-xl font-semibold text-gray-900">{review.book}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar key={idx} className={idx < review.rating ? 'fill-current' : 'text-gray-300'} />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed text-gray-700">"{review.quote}"</p>
                <div className="mt-6 text-sm text-gray-600">
                  <p className="font-semibold text-gray-900">{review.reviewer}</p>
                  <p>5 days ago</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
