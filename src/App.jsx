import styles from './App.module.scss'
import Filter from './components/Filter/Filter'
import Logo from './components/Logo/Logo'
import ShowMoreTickets from './components/ShowMoreTickets/ShowMoreTickets'
import Tabs from './components/Tabs/Tabs'
import Ticket from './components/Ticket/Ticket'

function App() {
  return (
    <div className={styles.container}>
      <Logo />
      <main className={styles.main}>
        <Filter />
        <article className={styles.article}>
          <Tabs />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <ShowMoreTickets />
        </article>
      </main>
    </div>
  )
}

export default App
