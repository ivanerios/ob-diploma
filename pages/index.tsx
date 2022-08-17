import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Diploma from '../components/diploma'
import badge from '../utils/images/badge.svg'
import Header from '../components/header'
import Footer from '../components/footer'


const Home: NextPage = () => {

  const datos = {
    name: 'Paco',
    course: 'Cursillo',
    date: '12-04-2022'
  }

  return (
    <>
    <Header />
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <span><Image src={badge} width={38} height={38} /></span>
          </div>
          <div className={styles.text}>
            <span>CERTIFICAIÓN OBTENIDA</span>
            <span>JAVA AVANZAZO</span>
          </div>
        </div>
        <div className={styles.container}>
          <Diploma />
        </div>
        <div className={styles.diplomaMenu}></div>
      </div>
      <Footer />
    </>
  )
}

export default Home
