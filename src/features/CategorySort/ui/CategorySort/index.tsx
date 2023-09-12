import { FC } from 'react'

import { setCategory } from '@pages/main'
import { useAppDispatch } from '@shared/model/types'


export const CategorySort: FC = () => {
    const dispatch = useAppDispatch()
    
    const categoryHandle = (value: string) => {
        dispatch(setCategory(value))
    }

    return (
        <select 
            name="categories" 
            id="categories"
            defaultValue={"all"}
            onChange={(e) => categoryHandle(e.target.value)}
        >
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
        </select>
    )
}