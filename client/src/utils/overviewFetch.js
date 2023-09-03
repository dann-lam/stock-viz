import { alphavantageKey } from "../temp_apikey";
//Grabs general information about our searched company.
const overviewFetch = async (search) => {
  try {
    // let interval = Object.values(timeMap[timeInterval])[0];
    let response = await fetch(
      `  https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${alphavantageKey}`
    );
    let fetched = await response.json();
    console.log("Fetched is: ", fetched);
    // let orgName = fetched[0].name;
    // return orgName;
  } catch (err) {
    console.error(err);
  }
};

export default overviewFetch;
