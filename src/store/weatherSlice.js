import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const queryParams = {
  appid: 'b18902f68153db12e44ee147bb59bcf2',
  units: 'metric',
  lang: 'ru',
}

export const fetchLocationAndWeather = createAsyncThunk(
  'weather/fetchLocationAndWeather',
  async function (position, { rejectWithValue }) {
    try {
      const [location, weather] = await Promise.all([
        axios.get('http://api.openweathermap.org/geo/1.0/reverse', {
          params: {
            ...queryParams,
            lat: position.latitude,
            lon: position.longitude,
          }
        }),
        axios.get(`${BASE_URL}/weather`, {
          params: {
            ...queryParams,
            lat: position.latitude,
            lon: position.longitude,
          }
        })
      ])

      return { city: location.data[0].local_names.ru, weather: weather.data }
    } catch (err) {
      return rejectWithValue({ name: err.name, message: err.message });
    }
  }
);

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
      return rejectWithValue({ name: err.name, message: err.message });
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
      return rejectWithValue({ name: err.name, message: err.message });
    }
  }
);

export const fetchPopularWeather = createAsyncThunk(
  'weather/fetchPopularWeather',
  async function (_, { rejectWithValue }) {
    try {
      const [moscow, saintP, sochi, rostovOnDon, volgograd, nizhnyN, novosib] = await Promise.all([
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 524894 } }),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 536203 } }),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 491422 } }),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 501175 } }),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 472757 } }),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 520555 } }),
        axios.get(`${BASE_URL}/weather`, { params: { ...queryParams, id: 1496747 } }),
      ])

      return [moscow.data, saintP.data, sochi.data, rostovOnDon.data, volgograd.data, nizhnyN.data, novosib.data]
    } catch (err) {
      return rejectWithValue({ name: err.name, message: err.message });
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
    error: null,
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
    [fetchForecast.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ///////
    [fetchCurrentWeather.pending]: (state) => {
      state.weather = null;
    },
    [fetchCurrentWeather.fulfilled]: (state, action) => {
      state.weather = action.payload;
    },
    [fetchCurrentWeather.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ///////
    [fetchLocationAndWeather.pending]: (state) => { },
    [fetchLocationAndWeather.fulfilled]: (state, action) => {
      state.city = action.payload.city;
      state.weather = action.payload.weather;
    },
    [fetchLocationAndWeather.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ///////
    [fetchPopularWeather.pending]: (state) => {
      state.popularWeather = null;
    },
    [fetchPopularWeather.fulfilled]: (state, action) => {
      state.popularWeather = action.payload;
    },
    [fetchPopularWeather.rejected]: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;