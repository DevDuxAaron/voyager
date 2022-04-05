import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'

import styles from './Promo.module.css'

const Promo = () => {
    const router = useRouter();
    const id = router.query.idPromo
    return (
        <div className='container'>
            <Header />
            <div className='section'>
                {/* Request by id */}

                <Menu />
            </div>
        </div>
    )
}

export default Promo