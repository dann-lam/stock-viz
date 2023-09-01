// const path = require("path");
import congressTransactions from "./all_transactions.json";

//congressData, at the moment we only have data from 2019-2021, this isn't a true query request to some API, as that stuff costs $$$.

const congressTradingFetch = (search) => {
  let tickerMatches = [];
  //Store our matches in tickerMatches
  for (let i = 0; i < congressTransactions.length; i++) {
    let currTicker = congressTransactions[i].ticker;
    //see if there is a match
    if (currTicker === search) {
      //put it in
      tickerMatches.push(congressTransactions[i]);
    }
  }
  return tickerMatches;
};

export default congressTradingFetch;
