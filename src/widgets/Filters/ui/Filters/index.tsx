import { FC } from 'react'

import { CategorySort } from '@features/CategorySort'
import { Sort } from '@features/Sort'

import styles from './index.module.scss'


export const Filters: FC = () => {

    return (
        <div className = {styles.filtersContainer}>
            <CategorySort />
            <Sort />
        </div>
    )
}