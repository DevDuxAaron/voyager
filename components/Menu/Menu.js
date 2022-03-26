import React from 'react'
import Link from 'next/link'
import { MenuContext } from '../MenuContext/MenuContext'

import styles from './Menu.module.css'

const Menu = () => {
  const {menuPosition} = React.useContext(MenuContext)
  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.list}>
          <Link href='/'>
            <a className={`${menuPosition==0 ? styles.active : ""}`}>
              <span className={styles.icon}>
                <svg className={styles.item} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                </svg>
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href='/maps'>
            <a className={`${menuPosition==1 ? styles.active : ""}`}>
              <span className={styles.icon}>
                <svg className={styles.item} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path className={styles.item} fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z" />
                </svg>
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href='/search'>
            <a className={`${menuPosition==2 ? styles.active : ""}`}>
              <span className={styles.icon}>
                <svg className={styles.item} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                  <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                </svg>
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href='/calendar'>
            <a className={`${menuPosition==3 ? styles.active : ""}`}>
              <span className={styles.icon}>
                <svg className={styles.item} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href='/user'>
            <a className={`${menuPosition==4 ? styles.active : ""}`}>
              <span className={styles.icon}>
                <svg className={styles.item} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu