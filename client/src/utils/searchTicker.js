const searchTicker = (query, timeInterval) => {
  //Make switch case and object to handle timeInterval that will affect the function request on our API.
  const theTime = {

  }
  let currTime = "TIME_SERIES_DAILY_ADJUSTED"
  console.log(timeInterval);

  return fetch(
    `https://www.alphavantage.co/query?function=${currTime}&symbol=${query}&interval=5min&apikey=NP9GNGJNY8XMZIK9&datatype=json`
  );
};
// https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo
export default searchTicker;
