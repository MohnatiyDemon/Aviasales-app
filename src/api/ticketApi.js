import { createAsyncThunk } from '@reduxjs/toolkit'
import { addTickets } from '../store/ticketsSlice'
import { notificationError } from '../utils/notificationError'

const URL = 'https://aviasales-test-api.kata.academy'

const fetchSearchId = async () => {
  const response = await fetch(`${URL}/search`)
  if (!response.ok) {
    throw new Error('Ошибка при загрузке searchId')
  }
  const data = await response.json()
  return data.searchId
}

const fetchTicketsBatch = async (searchId) => {
  const response = await fetch(`${URL}/tickets?searchId=${searchId}`)
  if (!response.ok) {
    const error = new Error(`Ошибка при загрузке билетов: ${response.statusText}`)
    error.response = response
    throw error
  }
  return await response.json()
}

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { dispatch }) => {
  const searchId = await fetchSearchId()
  let stop = false

  while (!stop) {
    try {
      const { tickets, stop: batchStop } = await fetchTicketsBatch(searchId)
      dispatch(addTickets(tickets))
      stop = batchStop
    } catch (error) {
      if (error.response.status >= 500) {
        continue
      } else {
        notificationError('Произошла непредвиденная ошибка')
      }
    }
  }
})
