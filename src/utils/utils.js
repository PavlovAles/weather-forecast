export function roundToDec(val) {
  return Math.round(val * 10) / 10;
}

export function getReadableLocalTime(timezone) {
  const localDate = new Date();
  const localTime = localDate.getTime();
  const localOffset = localDate.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const cityTime = new Date(utc + (timezone * 1000));
  const timeStr = cityTime.toLocaleString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return timeStr;
}
