import styles from './header.module.css'
import Image from 'next/image'
import logo from '../utils/images/Logo_ob.svg'

const Header = () => {
  return (
    <div className={styles.header}>
    <span><Image src={logo} width={128} height={32} /></span>
    <span>
      <button>Ir al campus</button>
      <button>Empieza ya</button>
    </span>
  </div>
  )
}

export default Header