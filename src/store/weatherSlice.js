import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const queryParams = {
  appid: 'b18902f68153db12e44ee147bb59bcf2',
  units: 'metric',
  lang: 'ru',
}

export const fetchCurrentWeather = createAsyncThunk(
  'weather/fetchCurrentWeather',
  async function (value, { dispatch, rejectWithValue }) {
    dispatch(setCity({ city: value.label }))
    try {
      const weather = await axios.get(`${BASE_URL}/weather`, {
        params: {
          ...queryParams,
          id: value.value,
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
      const forecast = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          ...queryParams,
          id: value.value,
        }
      });
      return forecast.data.list;
    } catch (err) {
      rejectWithValue(err)
    }
  }
);

export const fetchPopularWeather = createAsyncThunk(
  'weather/fetchPopularWeather',
  async function (_, { rejectWithValue }) {
    try {
      const [moscow, saintP, sochi, rostovOnDon, volgograd, nizhnyN, novosib] = await Promise.all([
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 524894 }}),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 536203 }}),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 491422 }}),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 501175 }}),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 472757 }}),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 520555 }}),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 1496747 }}),
      ])

      return [moscow.data, saintP.data, sochi.data, rostovOnDon.data, volgograd.data, nizhnyN.data, novosib.data]
    } catch (err) {
      rejectWithValue(err)
    }
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: null,
    forecast: [],
    weather: null,
    popularWeather: null,
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
    [fetchForecast.rejected]: (state, action) => { },

    [fetchCurrentWeather.pending]: (state) => {
      state.weather = null;
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      state.weather = action.payload;
    },
    [fetchCurrentWeather.rejected]: (state, action) => { },

    [fetchPopularWeather.pending]: (state) => {
      state.popularWeather = null;
    },
    [fetchPopularWeather.fulfilled]: (state, action) => {
      state.popularWeather = action.payload;
    },
    [fetchPopularWeather.rejected]: (state, action) => { },
  }
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;