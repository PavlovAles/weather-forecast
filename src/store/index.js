import { configureStore } from '@reduxjs/toolkit';
import saveCityhMiddleware from './saveCityMiddleware';
import weatherReducer from './weatherSlice';

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveCityhMiddleware),
});
