import React from "react";
import Link from "next/link";

import styles from './YesNoBtn.module.css'

const YesNoBtn = ({primary, secondary}) => {
    return (
        <div className={styles.container}>
            <div className={styles.secondary}>
                <Link href="/">
                    <a>
                        <h3>{secondary}</h3>
                    </a>
                </Link>
            </div>
            <div className={styles.primary}>
                <Link href="/">
                    <a>
                        <h3>{primary}</h3>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export { YesNoBtn };
