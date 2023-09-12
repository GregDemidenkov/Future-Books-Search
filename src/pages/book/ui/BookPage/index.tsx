import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getBookById } from '@pages/book'
import { BaseContainer } from '@shared/ui/BaseContainer'
import { useAppDispatch, useAppSelector } from '@shared/model/types'

import styles from './index.module.scss'


export const BookPage: FC = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const { book, isLoading } = useAppSelector(state => state.book)

    useEffect(() => {
        dispatch(getBookById(params.id || ""))
    }, [])

    return (
        <BaseContainer>
            {
                book.id && !isLoading &&
                <>
                    <div className = {styles.bookContainer}>
                        <div className = {styles.imgBlock}>
                            <img src = {book.img} alt="обложка" />
                        </div>
                        <div className = {styles.infoBlock}>
                            <h1>{ book.info.title }</h1>
                            <p className = {styles.categories}>{ book.info.categories.join(', ') }</p>
                            <p className = {styles.authors}>{ book.info.authors.join(', ') }</p>
                            <p className = {styles.description}>{ book.description }</p>
                        </div>
                    </div>
                    <p className = {styles.descriptionAlt}>{ book.description }</p>
                </>
            }
        </BaseContainer>
    )
}