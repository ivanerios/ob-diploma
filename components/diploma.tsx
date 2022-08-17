import styles from './diploma.module.css'

const Diploma = ({ data }: { data: any }) => {
  return (
      <div className={styles.diploma}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.course}>{data.course}</div>
        <div className={styles.date}>{data.date}</div>
      </div>
  )
}

export default Diploma
