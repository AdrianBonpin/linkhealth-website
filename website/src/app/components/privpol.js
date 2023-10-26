import styles from './privacy.module.css'

import { setConsentCookie, hasConsentCookie } from '@/utils/consentCookie'
import { useState, useEffect } from 'react'

const PrivacyPolicy = () => {
    const [accepted, setAccepted] = useState(true)

    const handleAccept = () => {
        setConsentCookie()
        setAccepted(true)
    }

    useEffect(() => {
        const userHasConsented = hasConsentCookie()
        if (!userHasConsented) { setAccepted(false) }
    }, [])

    return (
        <div className={`${styles.privpol} ${accepted ? styles.hidden : ''}`}>
            <p className={styles.text}>This website uses information-gathering tools such as cookies, web analytics, and other similar technology. By using this website, you consent to the use of these tools.</p>
            <button className={styles.but} onClick={handleAccept}>I ACCEPT</button>
        </div>
    )
}

export default PrivacyPolicy