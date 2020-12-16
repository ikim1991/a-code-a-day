import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';


export const BookContext = createContext<any>({});

const BookContextProvider = (props: any) => {

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const sessionData = sessionStorage.getItem('books');

        return sessionData ? JSON.parse(sessionData) : []
    })

    useEffect(() => {
        sessionStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;