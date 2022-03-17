import React from 'react'

import styles from './SubTitle.module.css'

const SubTitle = ({title}) => {
  return (
    <h2 className={styles.title}>{title}</h2>
  )
}

export { SubTitle }