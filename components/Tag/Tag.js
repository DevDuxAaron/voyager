import React from 'react'

import styles from './Tag.module.css'

const Tag = ({title}) => {
    return (
        <div>
            <button className={styles.btn}>{title}</button>
        </div>
    )
}

export default Tag