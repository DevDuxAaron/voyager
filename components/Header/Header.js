import React from 'react'
import Link from 'next/link'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.title}>Voyager</h1>
      <Link href='/'>
        <a className={styles.header_icon_container}>
          <svg className={[styles.header_icon, styles.bi ,styles.biSearch]} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default Header