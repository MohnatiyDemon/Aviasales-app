import { createSlice } from '@reduxjs/toolkit'

const initialState = 'cheapest'

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setActiveTab(state, action) {
      return action.payload
    },
  },
})

export const { setActiveTab } = tabsSlice.actions
export default tabsSlice.reducer
