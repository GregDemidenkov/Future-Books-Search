import { FC, useEffect } from 'react'

import { getBooks } from '@pages/main'
import { Filters } from '@widgets/Filters'
import { Search } from '@features/Search'
import { LoadMore } from '@features/LoadMore'
import { BookCard } from '@entities/book'
import { useAppDispatch, useAppSelector } from '@shared/model/types'
import { BaseContainer } from '@shared/ui/BaseContainer'

import styles from './index.module.scss'


export const MainPage: FC = () => {
    const dispatch = useAppDispatch()
    const { 
        books, 
        totalCount, 
        searchString, 
        sort, 
        category,
        isLoading,
    } = useAppSelector(state => state.books)

    useEffect(() => {
        if(searchString.length) {
            dispatch(getBooks({
                searchContent: searchString,
                sort,
                category, 
                paginationIndex: 0
            }))
        }
    }, [sort, category])
    
    return (
        <BaseContainer>
            <div className = {styles.container}>
                <h1><span>Future</span> Books Search</h1>
                <Search />
                <Filters />
            </div>
            {
                totalCount && <p className = {styles.foundCount}>Found <span>{totalCount}</span> results</p>
            }
            <div className = {styles.booksList}>
                {
                    
                    books.map((book, index) => (
                        <BookCard 
                            key = {`${book.id}${index}`}
                            book = {book}
                        />
                    ))
                }
            </div>
            {
                isLoading && <p>Загрузка...</p>
            }
            <div className = {styles.loadMoreContainer}>
                {
                    books.length > 0 && <LoadMore />
                }
            </div>
        </BaseContainer>
    )
}