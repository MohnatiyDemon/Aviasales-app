import s7logo from '../../assets/logos/S7Logo.svg'
import './Ticked.scss'

const Ticket = () => {
  return (
    <section className="Ticket">
      <div className="Ticket__header">
        <span className="Ticket__price"> 13 400 Р</span>
        <img className="Ticket__logo" src={s7logo} alt="Airline Logo" />
      </div>
      <div className="Ticket__info">
        <div className="Ticket__route">
          <div className="Ticket__cities">MOW – HKT</div>
          <div className="Ticket__time">10:45 – 08:00</div>
        </div>
        <div className="Ticket__lenght">
          <div className="Ticket__way">В пути</div>
          <div className="Ticket__time-lenght">21ч 15м</div>
        </div>
        <div className="Ticket__stops">
          <div className="Ticket__stops-count">2 пересадки</div>
          <div className="Ticket__stops-cities">HKG, JNB</div>
        </div>
      </div>
    </section>
  )
}

export default Ticket
