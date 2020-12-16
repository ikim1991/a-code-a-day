import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext);

    return(
        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>Currently You Have {books.length} Books to Read...</p>
        </div>
    )

}

export default NavBar;