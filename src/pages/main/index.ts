import booksReducer from './model/slice'

export { MainPage } from './ui/MainPage'
export { getBooks } from './model/getBooksAction'
export { booksReducer }

export { 
    setCategory, 
    setSearchString, 
    setSort,
    setBooks, 
    setPaginationIndex
} from './model/slice'

export type { 
    getBooksProps, 
    SortEnum, 
    CategoryEnum 
} from './model/types'