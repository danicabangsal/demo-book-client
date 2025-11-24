import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import { buildApiUrl } from '../../utils/constants';

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(buildApiUrl('/all-books')).then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"Best Borrowed Books"} />
        </>
    )
}

export default BestSeller
