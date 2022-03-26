import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import { SubTitle } from '../../components/SubTitle/SubTitle'
import { Option } from '../../components/Option/Option'
import { YesNoBtn } from '../../components/YesNoBtn/YesNoBtn'

import styles from "./scheduleTrip.module.css";

const scheduleTrip = () => {
    const router = useRouter()
    return (
        <div className='container'>
            <Header />
            <div className='section'>
                <SubTitle title='Programar viaje'/>
                <div className={styles.container}>
                    <div className={styles.places}>
                        <div className={styles.place}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <h3>La paz</h3>
                        </div>
                        <div className={styles.place}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <h3>{router.query.idPlace}</h3>
                        </div>
                    </div>
                    <Link href="/">
                        <a className={styles.btn}>
                            <span className={styles.icon}>
                                <svg className={[styles.item]} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </span>
                        </a>
                    </Link>
                </div>

                <SubTitle title='Seleccione tipo de viaje'/>
                    <Option checked={true} title='Compartido' description='Comparte el viaje con otros viajeros de camino' price='15.00' image='/electricCar.svg'/>
                    <Option title='Standard' description='Viajes accesibles todo para ti' price='30.00' image='/electricCar.svg'/>
                    <Option title='Deluxe' description='Vehículos nuevos con equipamiento adicional' price='55.00' image='/electricCar.svg'/>
                    <Option title='Premium' description='Viajes de lujo con conductores profesionales' price='120.00' image='/electricCar.svg'/>
                <SubTitle title='Seleccione método de pago'/>
                    <Option title='Visa' description='Expira 10/25' complement='**** **** **** 5678' paymode={true} image="/creditCard.svg"/>
                    <Option title='Paypal' description='sflores@gmail.com' image="/paypal.svg"/>
                <YesNoBtn primary='Confirmar' secondary='Atrás'/>
            </div>
        </div>
    )
}

export default scheduleTrip