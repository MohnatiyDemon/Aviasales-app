import s7logo from '../../assets/logos/S7Logo.svg'
import classes from './Ticket.module.scss'

const Ticket = () => {
  return (
    <section className={classes.Ticket}>
      <div className={classes.Ticket__header}>
        <span className={classes.Ticket__price}>13 400 Р</span>
        <img className={classes.Ticket__logo} src={s7logo} alt="Airline Logo" />
      </div>
      <div className={classes.Ticket__info}>
        <div className={classes.Ticket__route}>
          <div className={classes.Ticket__cities}>MOW – HKT</div>
          <div className={classes.Ticket__time}>10:45 – 08:00</div>
        </div>
        <div className={classes.Ticket__length}>
          <div className={classes.Ticket__way}>В пути</div>
          <div className={classes.Ticket__timeLength}>21ч 15м</div>
        </div>
        <div className={classes.Ticket__stops}>
          <div className={classes['Ticket__stops-count']}>2 пересадки</div>
          <div className={classes['Ticket__stops-cities']}>HKG, JNB</div>
        </div>
      </div>
    </section>
  )
}

export default Ticket
