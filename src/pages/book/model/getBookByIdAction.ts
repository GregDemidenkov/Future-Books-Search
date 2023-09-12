import { AxiosResponse } from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

import BooksService from "@entities/book/api/BooksService"
import { FullBook } from "@entities/book"

import jsonParser from "./jsonParser"


export const getBookById = createAsyncThunk<FullBook, string>(
    "book/getBookById", 
    async (id, thunkAPI) => {
        try {
            const response: AxiosResponse = await BooksService.getBookById(id)

            return jsonParser(response.data)
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)