//Ingesting of react values to return the economic indicator data for a given ticker.
import { alphavantageKey } from "../temp_apikey";
const indicatorFetch = (indicator, search, timeInterval) => {
  const timeMap = {
    "1D": { TIME_SERIES_INTRADAY: "5min" },
    "5D": { TIME_SERIES_INTRADAY: "30min" },
    //TIME_SERIES_DAILY_ADJUSTED actually doesn't need the interval to be set.
    //I just do it because it's convenient, it doesn't make a difference however.
    "1M": { TIME_SERIES_DAILY: "daily" },
    "6M": { TIME_SERIES_WEEKLY: "weekly" },
    Max: { TIME_SERIES_MONTHLY: "monthly" },
  };

  try {
    let interval = Object.values(timeMap[timeInterval])[0];
    let fetched = fetch(
      `https://www.alphavantage.co/query?function=${indicator}&symbol=${search}&interval=${interval}&time_period=10&series_type=close&apikey=${alphavantageKey}`
    );
    return fetched;
  } catch (err) {
    console.error(err);
  }
  //Fetch my information

  //format my information

  //return that information
};

export default indicatorFetch;
