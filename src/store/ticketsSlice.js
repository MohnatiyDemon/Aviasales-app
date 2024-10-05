import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchSearchId = async () => {
	const response = await fetch('https://aviasales-test-api.kata.academy/search');
  if (!response.ok) {
    throw new Error('Ошибка при загрузке searchId');
  }
  const data = await response.json();
  return data.searchId;
};


const fetchTicketsBatch = async (searchId) => {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    
    if (!response.ok) {
      throw new Error(`Ошибка при загрузке билетов: ${response.statusText}`);
    }
    return await response.json(); 
};

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  try {
    const searchId = await fetchSearchId();
    let allTickets = [];
    let stop = false;

    while (!stop) {
      try {
        const { tickets, stop: batchStop } = await fetchTicketsBatch(searchId); 
        allTickets = [...allTickets, ...tickets]; 
        stop = batchStop; 
      } catch  {
        await new Promise(resolve => setTimeout(resolve, 100)); 
      }
    }
    return allTickets; 
  } catch (error) {
    throw error;
  }
});

const initialState = {
	items: [],
	status: 'idle',
	error: null,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  
  },
});

export default ticketsSlice.reducer;