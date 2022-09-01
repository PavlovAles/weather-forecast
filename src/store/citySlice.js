// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';
import { createSlice } from '@reduxjs/toolkit';

const citySlice = createSlice({
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

export const { setCity } = citySlice.actions;

export default citySlice.reducer;