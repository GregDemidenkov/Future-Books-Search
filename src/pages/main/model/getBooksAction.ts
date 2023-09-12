import { AxiosResponse } from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

import { getBooksProps, setBooks, setPaginationIndex } from "@pages/main"
import BooksService from "@entities/book/api/BooksService"
import { getBooksDto } from "@entities/book"
import getUrl from "@shared/lib/getUrl"

import jsonParser from "./jsonParser"


export const getBooks = createAsyncThunk<getBooksDto, getBooksProps>(
    "books/getBooks", 
    async ({searchContent, sort, category, paginationIndex}, thunkAPI) => {
        try {
            thunkAPI.dispatch(setPaginationIndex(paginationIndex))
            if(paginationIndex === 0) thunkAPI.dispatch(setBooks())

            const response: AxiosResponse = await BooksService.getBooks(getUrl(searchContent, sort, category, paginationIndex))

            return jsonParser(response.data)
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)