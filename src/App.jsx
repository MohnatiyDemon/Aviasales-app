import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTickets } from './api/ticketApi'
import styles from './App.module.scss'
import Filter from './components/Filter/Filter'
import Logo from './components/Logo/Logo'
import Tabs from './components/Tabs/Tabs'
import TicketsList from './components/TicketList/TicketList'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Logo />
      <main className={styles.main}>
        <Filter />
        <article className={styles.article}>
          <Tabs />
          <TicketsList />
        </article>
      </main>
    </div>
  )
}

export default App
