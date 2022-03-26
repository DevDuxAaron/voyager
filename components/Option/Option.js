import React from 'react'
import Image from 'next/image'

import styles from './Option.module.css'

const Option = ({ title, description, price, complement, paymode, checked, image }) => {
    return (
        <div className={styles.card}>
            {checked && <input className={styles.input} type='radio' name='option' id={title} defaultChecked/>}
            {!checked && <input className={styles.input} type='radio' name='option' id={title} />}
            {paymode &&
                <label htmlFor={title}
                    className={styles.labelPaymode}>
                    <div className={styles.imageContainer}>
                        <Image src={image} alt="image" layout='fill'/>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <h6>{description}</h6>
                    </div>
                    {complement && <h3>{complement}</h3>}
                </label>
            }
            {!paymode &&
                <label htmlFor='card' className={styles.label}>
                    <div className={styles.imageContainer}>
                        <Image src={image} alt="image" layout='fill'/>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <h6>{description}</h6>
                    </div>
                    {price && <h3>
                        {price}
                        <span> $us</span>
                        </h3>}
                </label>
            }
        </div>
    )
}

export { Option }