import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {

    const {books} = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map((book: any, i: number) => {
                    return <BookDetails book={book} key={i}/>
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No Books to Read...</div>
    )
}

export default BookList;