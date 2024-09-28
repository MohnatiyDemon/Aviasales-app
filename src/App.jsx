import './App.scss'
import Filter from './components/Filter/Filter'
import Logo from './components/Logo/Logo'
import ShowMoreTickets from './components/ShowMoreTickets/ShowMoreTickets'
import Ticket from './components/Ticket/Ticket'

function App() {
  return (
    <div className="container">
      <Logo />
      <main className="main">
        <Filter />
        <article className="article">
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
