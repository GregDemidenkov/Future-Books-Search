import { FC } from 'react'
import { Link } from 'react-router-dom'

import { BookCardProps } from '@entities/book'

import styles from './index.module.scss'


export const BookCard: FC<BookCardProps> = ({ book }) => {

    return (
        <Link
            className = {styles.bookCard}
            to = {`/book/${book.id}`}
            id = {book.id}
        >
            <img src = {book.img} alt="" />
            <div className = {styles.info}>
                <p className = {styles.category}>{ book.info.categories[0] }</p>
                <p className = {styles.title}>{ book.info.title }</p>
                <p className = {styles.authors}>{ book.info.authors }</p>
            </div>
        </Link>
    )
}