import React from 'react'

import styles from './Promo.module.css'

const Promo = ({idPromo,title,image,expireDate,qtty,unit}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.image}>
                <Image src={image} alt={user} layout='fill'/>
            </div>
            <div className={styles.description}>
                <h3>{title}</h3>
                <h5>Promoción válidad hasta {expireDate}</h5>
            </div>
            <div className={styles.qtty}>
                <h5>{qtty}</h5>
                <h3>Dcto.</h3>
            </div>
        </div>
        <div className={styles.btn}>
            <Link href={"/site/"+placeName}>
                <a>
                    <h3>Aplicar</h3>
                </a>
            </Link>
        </div>
    </div>
  )
}

export { Promo }