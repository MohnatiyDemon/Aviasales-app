;<section className={styles.Ticket}>
  <div className={styles.Ticket__header}>
    <span className={styles.Ticket__price}>{price.toLocaleString('ru-RU')} Р</span>
    <img className={styles.Ticket__logo} src={logoUrl} alt={`Airline Logo: ${carrier}`} />
  </div>

  <div className={styles.Ticket__info}>
    <div className={styles.Ticket__block}>
      <div className={styles.Ticket__cities}>
        {outboundSegment.origin} – {outboundSegment.destination}
      </div>
      <div className={styles.Ticket__time}>
        {formatTime(outboundSegment.date)} –{' '}
        {formatTime(new Date(new Date(outboundSegment.date).getTime() + outboundSegment.duration * 60000))}
      </div>

      <div className={styles.Ticket__cities}>
        {returnSegment.origin} – {returnSegment.destination}
      </div>
      <div className={styles.Ticket__time}>
        {formatTime(returnSegment.date)} –{' '}
        {formatTime(new Date(new Date(returnSegment.date).getTime() + returnSegment.duration * 60000))}
      </div>
    </div>

    <div className={styles.Ticket__block}>
      <div className={styles.Ticket__way}>В пути</div>
      <div className={styles.Ticket__timeLength}>{formatDuration(outboundSegment.duration)}</div>

      <div className={styles.Ticket__way}>В пути</div>
      <div className={styles.Ticket__timeLength}>{formatDuration(returnSegment.duration)}</div>
    </div>

    <div className={styles.Ticket__block}>
      <div className={styles['Ticket__stops-count']}>{stopsCountText(outboundSegment.stops)}</div>
      <div className={styles['Ticket__stops-cities']}>{stopsInfo(outboundSegment.stops)}</div>

      <div className={styles['Ticket__stops-count']}>{stopsCountText(returnSegment.stops)}</div>
      <div className={styles['Ticket__stops-cities']}>{stopsInfo(returnSegment.stops)}</div>
    </div>
  </div>
</section>
