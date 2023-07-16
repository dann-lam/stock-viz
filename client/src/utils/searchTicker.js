const searchTicker = (query, timeInterval) => {
  //Make switch case and object to handle timeInterval that will affect the function request on our API.
  const timeMap = {
    "1D": { TIME_SERIES_INTRADAY: "60min" },
    "5D": { TIME_SERIES_DAILY_ADJUSTED: "10min" },
  };
  //The results of a button click determine the query function to be called.
  //The type of request is based off of which button is pushed.
  let currFunc = Object.keys(timeMap[timeInterval.interval])[0];
  let interval = timeMap[timeInterval.interval][currFunc];
  console.log(timeInterval);
  // let currTime = queryTime;

  return fetch(
    `https://www.alphavantage.co/query?function=${currFunc}&symbol=${query}&interval=${interval}&apikey=NP9GNGJNY8XMZIK9&datatype=json`
  );
};
// https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo
export default searchTicker;
