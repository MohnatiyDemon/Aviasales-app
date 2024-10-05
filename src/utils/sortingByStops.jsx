export default function sortingByStops(listOfTickets, stops) {
  if (stops?.all) return listOfTickets
  let sortedTickets = []
  const test = new Map([
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['zero', 0],
  ])

  const listOfStops = Object.keys(stops)
  listOfStops.forEach((element) => {
    if (stops[element]) {
      if (!sortedTickets.length) {
        const result = listOfTickets.filter((ticket) => {
          return ticket.segments[0].stops.length > ticket.segments[1].stops.length
            ? ticket.segments[1].stops.length == test.get(element)
            : ticket.segments[0].stops.length == test.get(element)
        })
        sortedTickets = [...result]
      }
      const result = listOfTickets.filter((ticket) => {
        return ticket.segments[0].stops.length > ticket.segments[1].stops.length
          ? ticket.segments[1].stops.length == test.get(element)
          : ticket.segments[0].stops.length == test.get(element)
      })
      sortedTickets = [...sortedTickets, ...result]
    }
  })
  return sortedTickets
}
