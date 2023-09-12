import { FC } from 'react'

import { getBooks } from '@pages/main'
import { useAppDispatch, useAppSelector } from '@shared/model/types'

import styles from './index.module.scss'


export const LoadMore: FC = () => {
    const dispatch = useAppDispatch()
    const { 
        searchString, 
        sort, 
        category, 
        paginationIndex 
    } = useAppSelector(state => state.books)

    return (
        <button 
            className = {styles.loadMoreButton}
            onClick={() => dispatch(getBooks({
                searchContent: searchString, 
                sort, 
                category, 
                paginationIndex: paginationIndex + 30
            }))}
        >
            Load more
        </button>
    )
}