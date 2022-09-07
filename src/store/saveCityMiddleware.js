export const saveCityhMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.endsWith('setCity') || action.type?.endsWith('getLocationAndCurrentWeather/fulfilled')) {
    const city = store.getState().weather.city;
    localStorage.setItem('city', JSON.stringify(city))
  }
  return result;
};
