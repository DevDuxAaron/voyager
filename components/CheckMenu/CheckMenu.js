import React from 'react'

import styles from './CheckMenu.module.css'

const CheckMenu = ({title1, title2, title3}) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <input className={styles.input} defaultChecked type='radio' name='option' id='card1'/>
                <label htmlFor='card1' className={styles.label}>
                    <h5>{title1}</h5>
                </label>
            </div>
            <div className={styles.card}>
                <input className={styles.input} type='radio' name='option' id='card2'/>
                <label htmlFor='card2' className={styles.label}>
                    <h5>{title2}</h5>
                </label>
            </div>
            <div className={styles.card}>
                <input className={styles.input} type='radio' name='option' id='card3'/>
                <label htmlFor='card3' className={styles.label}>
                    <h5>{title3}</h5>
                </label>
            </div>
        </div>
    )
}

export { CheckMenu }