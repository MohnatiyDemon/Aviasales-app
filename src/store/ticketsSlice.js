import { createSlice } from '@reduxjs/toolkit'
import { fetchTickets } from '../api/ticketApi'

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTickets: (state, action) => {
      state.items = [...state.items, ...action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.status = 'succeeded'
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { addTickets } = ticketsSlice.actions
export default ticketsSlice.reducer
