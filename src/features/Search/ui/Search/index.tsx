import { FC, useState } from 'react'

import { getBooks, setSearchString } from '@pages/main'
import { useAppDispatch, useAppSelector } from '@shared/model/types'

import styles from './index.module.scss'


export const Search: FC = () => {
    const dispatch = useAppDispatch()
    const { searchString, sort, category } = useAppSelector(state => state.books)
    const [searchContent, setSearchContent] = useState<string>(searchString)

    const searchHandle = async (e: any) => {
        e.preventDefault()

        if(searchContent.length) {
            dispatch(setSearchString(searchContent))
            dispatch(getBooks({searchContent, sort, category, paginationIndex: 0}))
        }
    }

    return (
        <form
            className = {styles.searchContainer}
            onSubmit = {(e) => searchHandle(e)}
        >
            <input 
                type = "text"
                placeholder = 'Search books...'
                value = {searchContent}
                onChange = {(e) => setSearchContent(e.target.value)}
            />
            <button type = 'submit'/>
        </form>
    )
}