const searchTicker = (query) => {
  return fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}&interval=5min&apikey=NP9GNGJNY8XMZIK9&datatype=json`
  );
};
// https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo
export default searchTicker;
