import styles from './Ticket.module.scss'

const Ticket = ({ data }) => {
  const { price, carrier, segments } = data

  const logoUrl = `https://pics.avs.io/99/36/${carrier}.png`

  const [outboundSegment, returnSegment] = segments

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}ч ${mins}м`
  }

  const stopsInfo = (stops) => {
    if (stops.length === 0) return ' '
    return stops.join(', ')
  }

  const stopsCountText = (stops) => {
    if (stops.length === 0) return '0 пересадок'
    return `${stops.length} ${stops.length === 1 ? 'пересадка' : 'пересадки'}`
  }
  return (
    <section className={styles.Ticket}>
      <div className={styles.Ticket__header}>
        <span className={styles.Ticket__price}>{price.toLocaleString('ru-RU')} Р</span>
        <img className={styles.Ticket__logo} src={logoUrl} alt={`Airline Logo: ${carrier}`} />
      </div>
      <div className={styles.Ticket__info}>
        <div className={styles.Ticket__segment}>
          <div className={styles.Ticket__route}>
            <div className={styles.Ticket__cities}>
              {outboundSegment.origin} – {outboundSegment.destination}
            </div>
            <div className={styles.Ticket__time}>
              {formatTime(outboundSegment.date)} –{' '}
              {formatTime(new Date(new Date(outboundSegment.date).getTime() + outboundSegment.duration * 60000))}
            </div>
          </div>
          <div className={styles.Ticket__length}>
            <div className={styles.Ticket__way}>В пути</div>
            <div className={styles.Ticket__timeLength}>{formatDuration(outboundSegment.duration)}</div>
          </div>
          <div className={styles.Ticket__stops}>
            <div className={styles['Ticket__stops-count']}>{stopsCountText(outboundSegment.stops)}</div>
            <div className={styles['Ticket__stops-cities']}>{stopsInfo(outboundSegment.stops)}</div>
          </div>
        </div>

        <div className={styles.Ticket__segment}>
          <div className={styles.Ticket__route}>
            <div className={styles.Ticket__cities}>
              {returnSegment.origin} – {returnSegment.destination}
            </div>
            <div className={styles.Ticket__time}>
              {formatTime(returnSegment.date)} –{' '}
              {formatTime(new Date(new Date(returnSegment.date).getTime() + returnSegment.duration * 60000))}
            </div>
          </div>
          <div className={styles.Ticket__length}>
            <div className={styles.Ticket__way}>В пути</div>
            <div className={styles.Ticket__timeLength}>{formatDuration(returnSegment.duration)}</div>
          </div>
          <div className={styles.Ticket__stops}>
            <div className={styles['Ticket__stops-count']}>{stopsCountText(returnSegment.stops)}</div>
            <div className={styles['Ticket__stops-cities']}>{stopsInfo(returnSegment.stops)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ticket
