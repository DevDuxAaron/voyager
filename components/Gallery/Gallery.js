import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.gallery}>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeV.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeV.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
        <div className={styles.aux}>
            <Image className={styles.image} src="/lakeH.jpg" alt="lake" layout='fill'/>
        </div>
    </div>
  )
}

export { Gallery }