import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Card, Spinner, TextInput } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useSearchParams } from 'react-router-dom';
import { buildApiUrl } from '../../utils/constants';

export default function Shop() {
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    fetch(buildApiUrl('/all-books'))
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [loading]);

  useEffect(() => {
    const newQuery = searchParams.get('query') || '';
    setSearchTerm(newQuery);
  }, [searchParams]);

  const filteredBooks = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return books;
    return books.filter(book =>
      book.bookTitle?.toLowerCase().includes(term) ||
      book.authorName?.toLowerCase().includes(term) ||
      book.category?.toLowerCase().includes(term)
    );
  }, [books, searchTerm]);

  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    )
  }

  return (
    <div className='my-28 px-4 lg:px-24'>
      <h2 className='text-3xl font-bold text-center mb-6 z-40'>All Books</h2>

      <div className="max-w-xl mx-auto mb-10">
        <TextInput
          type="search"
          placeholder="Search by title, author, or category"
          value={searchTerm}
          onChange={event => {
            const value = event.target.value;
            setSearchTerm(value);
            if (value) {
              setSearchParams({ query: value });
            } else {
              setSearchParams({});
            }
          }}
        />
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {
          filteredBooks.map(book => (
            <Card key={book._id}>
              <img src={book.imageURL} alt={book.bookTitle} className='h-96 w-full object-cover' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Written by {book.authorName || 'Unknown'} in {book.category || 'Uncategorized'}
              </p>

              <Link
                to={`/book/${book._id}`}
                className='px-6 py-3 bg-[#181A2D] text-white font-semibold rounded-lg shadow border-2 border-transparent transition-all duration-300 ease-out hover:scale-105 hover:border-[#ED6404] hover:bg-[#1f2138] hover:shadow-xl hover:opacity-95 text-center'
              >
                Borrow Now
              </Link>
            </Card>
          ))
        }
        {
          filteredBooks.length === 0 && (
            <p className='col-span-full text-center text-gray-500'>No books found for "{searchTerm}".</p>
          )
        }
      </div>
    </div>
  )
}
