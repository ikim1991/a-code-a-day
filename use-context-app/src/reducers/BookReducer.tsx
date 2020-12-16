import React, { useReducer } from 'react';

export const bookReducer = (state: any, action: any) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: Math.ceil(Math.random() * 1000)
            }]
        case 'REMOVE_BOOK':
            return state.filter((book: any) => book.id !== action.id)
        default:
            return state
    }
}
