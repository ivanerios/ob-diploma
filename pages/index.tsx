import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Diploma from '../components/diploma'


const Home: NextPage = () => {
  return (
    <>
    <div className={styles.header}>header</div>
    <div className={styles.container}>
      <Diploma />
    </div>
    <div className={styles.footer}>footer</div>
    </>
  )
}

export default Home
