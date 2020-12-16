import React, { ChangeEvent, useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {

    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        console.log(title, author)
        dispatch({type: "ADD_BOOK", book: {
            title, author
        }});
        setTitle('');
        setAuthor('')
    }

    return(
        <form>
            <input type="text" placeholder="Book Title..." value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}/>
            <input type="text" placeholder="Book Author..." value={author} onChange={(e:ChangeEvent<HTMLInputElement>) => setAuthor(e.currentTarget.value)}/>
            <input type="button" value="Add Book" onClick={handleSubmit}/>
        </form>
    )

}

export default BookForm;