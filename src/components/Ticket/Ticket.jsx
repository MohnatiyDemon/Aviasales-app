import s7logo from '../../assets/logos/S7Logo.svg'
import styles from './Ticket.module.scss'

const Ticket = () => {
  return (
    <section className={styles.Ticket}>
      <div className={styles.Ticket__header}>
        <span className={styles.Ticket__price}>13 400 Р</span>
        <img className={styles.Ticket__logo} src={s7logo} alt="Airline Logo" />
      </div>
      <div className={styles.Ticket__info}>
        <div className={styles.Ticket__route}>
          <div className={styles.Ticket__cities}>MOW – HKT</div>
          <div className={styles.Ticket__time}>10:45 – 08:00</div>
        </div>
        <div className={styles.Ticket__length}>
          <div className={styles.Ticket__way}>В пути</div>
          <div className={styles.Ticket__timeLength}>21ч 15м</div>
        </div>
        <div className={styles.Ticket__stops}>
          <div className={styles['Ticket__stops-count']}>2 пересадки</div>
          <div className={styles['Ticket__stops-cities']}>HKG, JNB</div>
        </div>
      </div>
    </section>
  )
}

export default Ticket
