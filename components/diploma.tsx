import styles from './diploma.module.css'

const Diploma = (/*{name}: {name: any}, {course}: {course: any}, {date}: {date: any}*/) => {
  return (
      <div className={styles.diploma}>
        <div className={styles.name}>Álvaro García</div>
        <div className={styles.course}>Java Avanzado</div>
        <div className={styles.date}>12-04-2022</div>
      </div>
  )
}

export default Diploma
