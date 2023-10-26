'use client'

import Image from 'next/image'
import Nav from '@/app/components/nav'
import Foot from '@/app/components/foot'
import PrivacyPolicy from '@/app/components/privpol'
import styles from './home.module.css'

import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <body>
      <Nav />
      <div className={styles.content} >
        <div className={styles.banner}>
          <img src='/banner.jpg' alt='Website banner' fill="true"/>
        </div>
        <div className={styles.maintext}>
          <h2 className={styles.h2txt}>LINKING PATIENTS</h2>
          <h3 className={styles.h3txt}>TO</h3>
          <h2 className={styles.h2txt}>HEALTHCARE PROVIDERS</h2>
          <div className={styles.inquire}>
              <button>INQUIRE NOW</button>
          </div>
        </div>
      </div>
      <PrivacyPolicy />
      <Foot />
    </body>
  )
}