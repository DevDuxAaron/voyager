import React from 'react'
import Tag from '../Tag/Tag'

import styles from './TagMenu.module.css'

const TagMenu = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Tag title='La Paz'/>
                </li>
                <li className={styles.item}>
                    <Tag title='Lago'/>
                </li >
                <li className={styles.item}>
                    <Tag title='Barcos'/>
                </li>
                <li className={styles.item}>
                    <Tag title='Frio'/>
                </li>
                <li className={styles.item}>
                    <Tag title='Canotaje'/>
                </li>
                <li className={styles.item}>
                    <Tag title='Bolivia'/>
                </li>
                <li className={styles.item}>
                    <Tag title='Deportes'/>
                </li>
                <li className={styles.item}>
                    <Tag title='Menos 50Km'/>
                </li>
            </ul>
        </nav>
    )
}

export default TagMenu