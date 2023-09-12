import { configureStore } from "@reduxjs/toolkit"

import { booksReducer } from '@pages/main'
import { bookReducer } from '@pages/book'


export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: bookReducer
    }
})