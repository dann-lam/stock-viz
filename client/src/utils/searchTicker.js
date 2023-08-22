const searchTicker = (query, timeScale) => {
  //Make switch case and object to handle timeScale that will affect the function request on our API.
  const timeMap = {
    "1D": { TIME_SERIES_INTRADAY: "5min" },
    "5D": { TIME_SERIES_INTRADAY: "30min" },
    //TIME_SERIES_DAILY_ADJUSTED actually doesn't need the interval to be set.
    //I just do it because it's convenient, it doesn't make a difference however.
    "1M": { TIME_SERIES_DAILY: "30min" },
    "6M": { TIME_SERIES_WEEKLY: "30min" },
    Max: { TIME_SERIES_MONTHLY: "30min" },
  };
  //The results of a button click determine the query function to be called.
  //The type of request is based off of which button is pushed.
  let currFunc = Object.keys(timeMap[timeScale])[0];
  let interval = timeMap[timeScale][currFunc];
  // console.log("--- searchTicker ---");
  // console.log("timeScale: ", timeScale);
  // console.log("CurrFunc is: ", currFunc);
  // console.log("interval is: ", interval);
  // let currTime = queryTime;

  return fetch(
    `https://www.alphavantage.co/query?function=${currFunc}&symbol=${query}&interval=${interval}&apikey=66M911GUXN2WRHBR&datatype=json`
  );
};
//

//www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo
//`https://www.alphavantage.co/query?function=${currFunc}&symbol=${query}&interval=${interval}&apikey=66M911GUXN2WRHBR&datatype=json`
export default searchTicker;
//NP9GNGJNY8XMZIK9
//66M911GUXN2WRHBR
