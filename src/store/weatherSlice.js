import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'cities',
  initialState: {
    city: null,
  },
  reducers: {
    setCity(state, action) {
      state.city = action.payload.city;
    }
  },
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;