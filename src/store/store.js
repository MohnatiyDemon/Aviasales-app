import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import tabsReducer from './tabsSlice'
import ticketsReducer from './ticketsSlice'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    tabs: tabsReducer,
    tickets: ticketsReducer,
  },
})

export default store