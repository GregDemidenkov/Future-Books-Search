import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FullBook } from "@entities/book"
import { getBookById } from "./getBookByIdAction"


interface BookState {
    book: FullBook,
    isLoading: boolean,
}

const initialState: BookState = {
    book: {} as FullBook,
    isLoading: false
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBookById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getBookById.fulfilled, (state, action: PayloadAction<FullBook>) => {
            state.isLoading = false
            state.book = action.payload
        })
        builder.addCase(getBookById.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { } = bookSlice.actions

export default bookSlice.reducer