import { useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuid4 } from 'uuid'
import Ticket from '../Ticket/Ticket'
import styles from './TicketList.module.scss'

const TicketsList = () => {
  const filter = useSelector((state) => state.filter)
  const activeTab = useSelector((state) => state.tabs)
  const tickets = useSelector((state) => state.tickets.items)
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)

  const filteredTickets = Array.isArray(tickets)
    ? tickets.filter((ticket) => {
        const stops = ticket.segments.reduce((acc, segment) => acc + segment.stops.length, 0)
        if (filter.all) return true
        if (stops === 0 && filter.noStops) return true
        if (stops === 1 && filter.oneStop) return true
        if (stops === 2 && filter.twoStops) return true
        if (stops === 3 && filter.threeStops) return true
        return false
      })
    : []

  const sortedTickets = [...filteredTickets].sort((a, b) => {
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
  const visibleTickets = sortedTickets.slice(0, visibleTicketsCount)

  return (
    <div className={styles.TicketsList}>
      {visibleTickets.map((ticket) => (
        <Ticket key={uuid4()} data={ticket} />
      ))}
      {visibleTicketsCount < sortedTickets.length && (
        <button className={styles.ShowMoreTickets} onClick={() => setVisibleTicketsCount((count) => count + 5)}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default TicketsList
