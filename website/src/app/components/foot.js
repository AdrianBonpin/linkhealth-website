'use client'

import Link from 'next/link'
import styles from './foot.module.css'

const footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <p className={styles.footxt}>📞 undefined | ✉️ sales@linkhealth-solutions.com</p>
                <p className={styles.footxt}>📍 Unit 1102, Park Centrale Building, Cebu IT Park, Cebu City, Philippines 6000</p>
            </div>
            <div className={styles.right}>
                <p className={styles.footxt}>Copyright © 2023 by LinkHealth Solutions Inc.</p>
            </div>
        </div>
    )
}

export default footer