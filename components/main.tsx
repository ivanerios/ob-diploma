import styles from './main.module.css'
import Diploma from '../components/diploma'
import badge from '../utils/images/badge.svg'
import link from '../utils/images/link.svg'
import download from '../utils/images/download.svg'
import smiley from '../utils/images/smiley.svg'
import Image from 'next/image'

const data = {
  name: 'Álvaro García',
  course: 'Java Avanzado',
  date: '12-04-2022'
}

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <span><Image src={badge} width={38} height={38} /></span>
        </div>
        <div className={styles.text}>
          <span>CERTIFICAIÓN OBTENIDA</span>
          <span>{data.course}</span>
        </div>
      </div>
      <div className={styles.container}>
        <Diploma data={data}/>
      </div>
      <div className={styles.diplomaMenu}>
        <div className={styles.heading}><Image src={smiley} width={48} height={48} /><span>Completado por <strong>{data.name}</strong></span></div>
        <div className={styles.text}>OpenBootcamp certifica que <strong>{data.name}</strong> ha finalizado y obtenido con éxito la certificación de <u>{data.course}</u>.</div>
        <div className={styles.buttons}>
          <button><Image src={link} width={16} height={17} />Compartir</button>
          <button><Image src={download} width={17} height={14} />Descargar en PDF</button>
        </div>
      </div>
    </div>
  )
}

export default Main