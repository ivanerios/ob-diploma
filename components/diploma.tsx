import styles from './diploma.module.css'

const Diploma = ({name, course, date}) => {
  return (
      <div className={styles.diploma}>
        <div className={styles.name}>{name}</div>
        <div className={styles.course}>{course}</div>
        <div className={styles.date}>{date}</div>
      </div>
  )
}

export default Diploma
