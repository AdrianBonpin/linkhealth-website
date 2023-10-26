'use client'

import Link from 'next/link'
import styles from './nav.module.css'
import { usePathname } from 'next/navigation'

const navbar = () => {

    const pathname = usePathname()

    const chkPage = (href) => {
        return pathname === href ? styles.current : styles.link
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.col_left}>
                <Link href='/'>L I N K H E A L T H</Link>
            </div>
            <div className={styles.col_right}>
                <div className={chkPage('/')}>
                    <Link href='/'>Home</Link>
                </div>
                <div className={chkPage('/about')}>
                    <Link href='/about'>About</Link>
                </div>
                <div className={chkPage('/contact')}>
                    <Link href='/contact'>Contact</Link>
                </div>
                <div className={chkPage('/portal')}>
                    <Link href='/portal'>Portal</Link>
                </div>
                <div className={styles.inquire}>
                    <button>INQUIRE NOW</button>
                </div>
            </div>
        </nav>
    )
}

export default navbar