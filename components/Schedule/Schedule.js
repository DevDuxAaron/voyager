import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Schedule.module.css'

const Schedule = ({user, calification, price, origin, destiny, departure, arrival}) => {
    return (
        <Link href='/maps'>
            <a className={styles.container}>
                <div className={styles.details}>
                    <div className={styles.profile_photo}>
                        <Image src="/userMale.jpg" alt="mea" layout='fill'/>
                    </div>
                    <div className={styles.user}>
                        <h3>{user}</h3>
                        <h5>
                            <svg className={styles.star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <span>{calification}</span>
                        </h5>
                    </div>
                    <div className={styles.cost}>
                        <h5>Costo total</h5>
                        <h3>
                            <span className={styles.price}>{price}</span>
                            <span className={styles.currency}>$us</span>
                        </h3>
                    </div>
                    <div className={styles.duration}>
                        <h5>Duración</h5>
                        <h3>
                            <span className={styles.time}>45.00</span>
                            <span className={styles.unit_time}>min</span>
                        </h3>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.places}>
                    <div className={styles.origin}>
                        <div className={styles.place}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <h3>{origin}</h3>
                        </div>
                        <div>
                            <h3>
                                <span className={styles.time}>{departure}</span>
                                <span className={styles.period}>AM</span>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.destiny}>
                        <div className={styles.place}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <h3>{destiny}</h3>
                        </div>
                        <div>
                            <h3>
                                <span className={styles.time}>{arrival}</span>
                                <span className={styles.period}>AM</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export { Schedule }