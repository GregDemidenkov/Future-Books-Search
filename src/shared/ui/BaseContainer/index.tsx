import { FC, PropsWithChildren } from 'react'

import styles from './index.module.scss'


export const BaseContainer: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className = {styles.container}>
            { children }
        </div>
    )
}