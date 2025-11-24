import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import { buildApiUrl } from '../../utils/constants';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(buildApiUrl('/all-books')).then(res => res.json()).then(data => setBooks(data.slice(5, 12)))
    }, [])

    return (
        <div className='mt-24'>
            <BookCards books={books} headline={"Other Books"} />
        </div>
    )
}

export default OtherBooks
