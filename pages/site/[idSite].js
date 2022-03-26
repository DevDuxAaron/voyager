import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import { Gallery } from '../../components/Gallery/Gallery'

import styles from './Site.module.css'

const Site = () => {
    const router = useRouter();
    return (
        <div className='container'>
            <Header />
            <div className='section'>
                <div className={styles.header}>
                    <div className={styles.profile_photo}>
                        <Image src="/userMale.jpg" alt="mea" layout='fill' />
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <h3>21</h3>
                            <h5>Fotos</h5>
                        </div>
                        <div className={styles.stat}>
                            <h3>563</h3>
                            <h5>Seguidores</h5>
                        </div>
                        <div className={styles.stat}>
                            <h3>172</h3>
                            <h5>Siguiendo</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.place}>
                    <h3 className={styles.placeName}>{router.query.idSite}</h3>
                    <p className={styles.description}>
                    El lago Titicaca se extiende por la frontera entre Perú y Bolivia en la cordillera de los Andes y es uno de los lagos más grandes de Sudamérica y el cuerpo de agua navegable más alto del mundo. Se dice que es la cuna de los incas y cuenta con varias ruinas. Sus aguas son conocidas por ser tranquilas y dar un reflejo brillante. En sus alrededores, se ubica la Reserva Nacional del Titicaca que alberga especies acuáticas poco comunes, como las ranas gigantes.
                    </p>
                </div>
                <nav className={styles.menuContainer}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <button className={styles.btn}>Seguir</button>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="/prom">
                                <a className={styles.btn}>
                                    Promociones
                                </a>
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="/schedule-trip/Copacabana">
                                <a className={styles.btn}>
                                    Programar viaje
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Gallery />
                <Menu />
            </div>
        </div>
    );
}

export default Site