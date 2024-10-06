import { Empty, Spin } from 'antd'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuid4 } from 'uuid'
import Ticket from '../Ticket/Ticket'
import styles from './TicketList.module.scss'

const TicketsList = () => {
  const filter = useSelector((state) => state.filter)
  const activeTab = useSelector((state) => state.tabs)
  const tickets = useSelector((state) => state.tickets.items)

  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)

  const isAnyFilterSelected = filter.all || filter.noStops || filter.oneStop || filter.twoStops || filter.threeStops

  const filteredTickets = useMemo(() => {
    if (!Array.isArray(tickets)) return []

    return tickets.filter((ticket) => {
      const stops = ticket.segments.reduce((acc, segment) => acc + segment.stops.length, 0)

      return (
        filter.all ||
        (stops === 0 && filter.noStops) ||
        (stops === 1 && filter.oneStop) ||
        (stops === 2 && filter.twoStops) ||
        (stops === 3 && filter.threeStops)
      )
    })
  }, [tickets, filter])

  const sortedTickets = useMemo(() => {
    return [...filteredTickets].sort((a, b) => {
      const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
      const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)

      if (activeTab === 'cheapest') {
        return a.price - b.price
      }
      if (activeTab === 'fastest') {
        return durationA - durationB
      }
      if (activeTab === 'optimal') {
        return a.price + durationA - (b.price + durationB)
      }
      return 0
    })
  }, [filteredTickets, activeTab])

  const visibleTickets = sortedTickets.slice(0, visibleTicketsCount)
  const showSpinner = tickets.length < 5
  const showEmptyState = !isAnyFilterSelected

  return (
    <div className={styles.TicketsList}>
      {showSpinner ? (
        <Spin tip="Получение билетов" size="large">
          <div className={styles.TicketList__empty}>
            <Empty description="Идет загрузка билетов" />
          </div>
        </Spin>
      ) : showEmptyState ? (
        <div className={styles.TicketList__empty}>
          <Empty description="Нет билетов, соответствующих выбранным фильтрам" />
        </div>
      ) : (
        <>
          {visibleTickets.map((ticket) => (
            <Ticket key={uuid4()} data={ticket} />
          ))}
          {visibleTicketsCount < sortedTickets.length && (
            <button className={styles.ShowMoreTickets} onClick={() => setVisibleTicketsCount((count) => count + 5)}>
              Показать еще 5 билетов!
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default TicketsList
