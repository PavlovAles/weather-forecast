import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  fetchLocationAndCurrentWeather,
  fetchWeather,
  fetchBigCitiesWeather,
} from './weatherApi';

export const getLocationAndCurrentWeather = createAsyncThunk(
  'weather/getLocationAndCurrentWeather',
  async function (position, { rejectWithValue }) {
    try {
      const [city, weather] = await fetchLocationAndCurrentWeather(position);
      return { city, weather }
    } catch (err) {
      return rejectWithValue({ name: err.name, message: err.message });
    }
  }
);

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async function (city, { dispatch, rejectWithValue }) {
    dispatch(setCity({ city }))
    try {
      const [weather, forecast] = await fetchWeather(city.coord);
      return { weather, forecast };
    } catch (err) {
      return rejectWithValue({ name: err.name, message: err.message });
    }
  }
);

export const getBigCitiesWeather = createAsyncThunk(
  'weather/getBigCitiesWeather',
  async function (_, { rejectWithValue }) {
    try {
      const data = await fetchBigCitiesWeather();
      return data.map(a => a.data)
    } catch (err) {
      return rejectWithValue({ name: err.name, message: err.message });
    }
  }
)

const savedCity = JSON.parse(localStorage.getItem('city'));

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: savedCity,
    forecast: [],
    weather: null,
    bigCitiesWeather: null,
    error: null,
  },
  reducers: {
    setCity(state, action) {
      state.city = action.payload.city;
    }
  },
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.forecast = [];
    },
    [getWeather.fulfilled]: (state, action) => {
      state.weather = action.payload.weather;
      state.forecast = action.payload.forecast;
    },
    [getWeather.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ///////
    [getLocationAndCurrentWeather.pending]: (state) => { },
    [getLocationAndCurrentWeather.fulfilled]: (state, action) => {
      state.city = {
        name: action.payload.city.local_names.ru,
        coord: {
          lat: action.payload.city.lat,
          lon: action.payload.city.lon,
        }
      };
      state.weather = action.payload.weather;
    },
    [getLocationAndCurrentWeather.rejected]: (state, action) => {
      state.error = action.payload;
    },
    ///////
    [getBigCitiesWeather.pending]: (state) => {
      state.bigCitiesWeather = null;
    },
    [getBigCitiesWeather.fulfilled]: (state, action) => {
      state.bigCitiesWeather = action.payload;
    },
    [getBigCitiesWeather.rejected]: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;