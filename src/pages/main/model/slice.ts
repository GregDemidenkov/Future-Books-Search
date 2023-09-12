import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Book, getBooksDto } from "@entities/book"
import { getBooks } from "./getBooksAction"
import { CategoryEnum, SortEnum } from "@pages/main"


interface BooksState {
    books: Book[],
    totalCount: number | null,
    searchString: string,
    sort: SortEnum
    category: CategoryEnum,
    paginationIndex: number,
    isLoading: boolean,
}

const initialState: BooksState = {
    books: [],
    totalCount: null,
    searchString: "",
    sort: "relevance",
    category: "all",
    paginationIndex: 0,
    isLoading: false
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setSearchString(state, action) {
            state.searchString = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        },
        setPaginationIndex(state, action) {
            console.log(action.payload)
            state.paginationIndex = action.payload
        },
        setBooks(state) {
            state.books = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getBooks.fulfilled, (state, action: PayloadAction<getBooksDto>) => {
            state.isLoading = false
            state.totalCount = action.payload.totalCount
            if(state.paginationIndex === 0) {
                state.books = action.payload.books
            } else {
                state.books.push(...action.payload.books)
            }
        })
        builder.addCase(getBooks.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { setSort, setCategory, setSearchString, setPaginationIndex, setBooks } = booksSlice.actions

export default booksSlice.reducer