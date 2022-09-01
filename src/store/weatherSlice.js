import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async function (value, { dispatch, rejectWithValue }) {
    dispatch(setCity({ city: value.label }))
    try {
      const weather = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: 'b18902f68153db12e44ee147bb59bcf2',
          id: value.value,
          units: 'metric',
          lang: 'ru',
        }
      });
      return weather.data;
    } catch (err) {
      rejectWithValue(err)
    }
  }
);

export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async function (value, { dispatch, rejectWithValue }) {
    dispatch(setCity({ city: value.label }))
    try {
      const forecast = await axios.get('http://api.openweathermap.org/data/2.5/forecast', {
        params: {
          appid: 'b18902f68153db12e44ee147bb59bcf2',
          id: value.value,
          units: 'metric',
          lang: 'ru',
        }
      });
      return forecast.data.list;
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
    weather: []
  },
  reducers: {
    setCity(state, action) {
      state.city = action.payload.city;
    }
  },
  extraReducers: {
    [fetchForecast.pending]: (state) => {
      state.forecast = [];
    },
    [fetchForecast.fulfilled]: (state, action) => {
      state.forecast = action.payload;
    },
    [fetchForecast.rejected]: (state, action) => {},

    [fetchCurrentWeather.pending]: (state) => {
      state.weather = [];
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      state.weather = action.payload;
    },
    [fetchCurrentWeather.rejected]: (state, action) => {},
  }
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;