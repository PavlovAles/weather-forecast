import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async function (value, { dispatch, rejectWithValue }) {
    dispatch(setCity({ city: value.label }))
    try {
      const weather = await axios.get('http://api.openweathermap.org/data/2.5/forecast', {
        params: {
          appid: 'b18902f68153db12e44ee147bb59bcf2',
          id: value.value,
          units: 'metric',
        }
      });
      return weather.data.list;
    } catch (err) {
      rejectWithValue(err)
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: null,
    forecast: [],
  },
  reducers: {
    setCity(state, action) {
      state.city = action.payload.city;
    }
  },
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.forecast = null;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.forecast = action.payload;
    },
    [fetchWeather.rejected]: (state, action) => {

    },
  }
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;