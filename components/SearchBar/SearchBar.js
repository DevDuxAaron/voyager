import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={[styles.search]}>
        <div className={styles.icon}></div>
        <div className={styles.input}>
            <input className={styles.text} type="text" placeholder="Buscar..." id='mysearch'/>
        </div>
        <span className={styles.clear}></span>
    </div>
  )
}

export default SearchBar