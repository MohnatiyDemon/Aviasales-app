import { createAsyncThunk } from '@reduxjs/toolkit'
import { addTickets } from '../store/ticketsSlice'

const fetchSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  if (!response.ok) {
    throw new Error('Ошибка при загрузке searchId')
  }
  const data = await response.json()
  return data.searchId
}

const fetchTicketsBatch = async (searchId) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
  if (!response.ok) {
    throw new Error(`Ошибка при загрузке билетов: ${response.statusText}`)
  }
  return await response.json()
}

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { dispatch }) => {
  try {
    const searchId = await fetchSearchId()
    let stop = false

    while (!stop) {
      try {
        const { tickets, stop: batchStop } = await fetchTicketsBatch(searchId)
        dispatch(addTickets(tickets))
        stop = batchStop
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    }
  } catch (error) {
    throw error
  }
})
