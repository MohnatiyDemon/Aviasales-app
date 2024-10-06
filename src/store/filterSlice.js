import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: true,
  noStops: true,
  oneStop: true,
  twoStops: true,
  threeStops: true,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter(state, action) {
      const { option } = action.payload

      if (option === 'all') {
        state.all = !state.all
        state.noStops = state.all
        state.oneStop = state.all
        state.twoStops = state.all
        state.threeStops = state.all
      } else {
        state[option] = !state[option]
        state.all = false

        const filters = ['noStops', 'oneStop', 'twoStops', 'threeStops']
        const allSelected = filters.every((filter) => state[filter])

        if (allSelected) {
          state.all = true
        }
      }
    },
  },
})

export const { toggleFilter } = filterSlice.actions
export default filterSlice.reducer
