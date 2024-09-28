import classes from './App.module.scss'
import Filter from './components/Filter/Filter'
import Logo from './components/Logo/Logo'
import ShowMoreTickets from './components/ShowMoreTickets/ShowMoreTickets'
import Tabs from './components/Tabs/Tabs'
import Ticket from './components/Ticket/Ticket'

function App() {
  return (
    <div className={classes.container}>
      <Logo />
      <main className={classes.main}>
        <Filter />
        <article className={classes.article}>
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
