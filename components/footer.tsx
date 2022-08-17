import styles from './footer.module.css'
import linkedIn from '../utils/images/icons8-linkedin-500.svg';
import twitter from '../utils/images/icons8-twitter.svg';
import instagram from '../utils/images/icons8-instagram.svg';
import facebook from '../utils/images/icons8-facebook.svg';
import logo from '../utils/images/Logo_ob_wh.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.column}>
        <Image src={logo} width='130' />
      </span>
      <span className={styles.column}>
        <h1>Redes Sociales</h1>
        <p><Image src={linkedIn} width='14' height='14' />&nbsp; &nbsp;LinkedIn</p>
        <p><Image src={twitter} width='14' height='14' />&nbsp; &nbsp;Twitter</p>
        <p><Image src={instagram} width='14' height='14' />&nbsp; &nbsp;Instagram</p>
        <p><Image src={facebook} width='14' height='14' />&nbsp; &nbsp;Facebook</p>
      </span>
      <span className={styles.column}>
        <h1>Políticas</h1>
        <p>Política de cookies</p>
        <p>Política de privacidad</p>
      </span>
      <span className={styles.column}>
        <h1>Recursos</h1>
        <p>Foro</p>
        <p>FaQ</p>
      </span>
      <span className={styles.column}>
        <h1>Explora</h1>
        <p>Acceso a campus</p>
        <p>Cursos</p>
      </span>
      <div className={styles.copyright}>© 2022 OpenBootcamp, Imagina Group. Todos los derechos reservados.</div>
    </div>
  )
}

export default Footer

