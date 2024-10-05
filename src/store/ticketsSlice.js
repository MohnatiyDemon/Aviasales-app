import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchSearchId = async () => {
	const response = await fetch('https://aviasales-test-api.kata.academy/search');
  if (!response.ok) {
    throw new Error('Ошибка при загрузке searchId');
  }
  const data = await response.json();
  return data.searchId;
};

// const fetchTicketsBatch = async (searchId) => {
//   const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
//   // if (!response.ok) {
//   //   throw new Error('Ошибка при загрузке билетов');
//   // }
//   return await response.json();
  
// };

const fetchTicketsBatch = async (searchId) => {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
  
  if (!response.ok) {
    throw new Error('Ошибка при загрузке билетов: ' + response.statusText);
  }

  const text = await response.text(); // Получаем ответ как текст
  try {
    return JSON.parse(text); // Пытаемся распарсить текст как JSON
  } catch (error) {
    throw new Error('Ошибка при разборе ответа: ' + error.message);
  }
};

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
  try {
    const searchId = await fetchSearchId();
    let allTickets = [];
    let stop = false;

    while (!stop) {
      const { tickets, stop: batchStop } = await fetchTicketsBatch(searchId);
      allTickets = [...allTickets, ...tickets];
      stop = batchStop;
    }

    return allTickets;
  } catch (error) {
    console.error('Ошибка при получении билетов:', error.message);
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
        console.log('Загрузка билетов началась');
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        console.log('Билеты загружены успешно:', action.payload);
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        console.log('Ошибка при загрузке билетов:', action.error.message);
        state.status = 'failed';
        state.error = action.error.message;
      });
  
  },
});

export default ticketsSlice.reducer;