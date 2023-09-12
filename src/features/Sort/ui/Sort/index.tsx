import { FC } from 'react'

import { setSort } from '@pages/main'
import { useAppDispatch } from '@shared/model/types'


export const Sort: FC = () => {
    const dispatch = useAppDispatch()

    const sortHandle = (value: string) => {
        dispatch(setSort(value))
    }

    return (
        <select 
            name="sort" 
            id="sort" 
            defaultValue={"relevance"}
            onChange={(e) => sortHandle(e.target.value)}
        >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
        </select>
    )
}