import { useEffect } from "react";
import congressTradingFetch from "../utils/congressTradingFetch";
import congressTradingParser from "./congressTradingParser";
//Unfortunately, it's difficult to work with opensecrets with how things are setup.
//I would need to think of a way to standardize company searches to ensure that
//A. I get a return.
//B. That return is actually the company we want.
//Currently, there isn't an easy way I can see to do that.

// import lobbyingDataFetch from "./lobbyingDataFetch";
// import lobbyingDataParse from "./lobbyingDataParse";

const congressTradingUpdater = async (
  setCongressData,
  search,
  congressData
) => {
  //Swap it from whatever value it was to the opposite.
  await setCongressData((currData) => {
    //Check to see if we have the data or not,
    let updatedData;
    let fetchedStatus = currData.isFetched;
    if (fetchedStatus === false) {
      let fetchedData = congressTradingFetch(search);
      //Format the data that was return from our search query.
      const parsedData = congressTradingParser(fetchedData);
      // console.log("Parsed data is: ", parsedData);
      //change fetchedStatus to true.
      fetchedStatus = true;
      //Update our data and return it.
      updatedData = {
        isDisplayed: !currData.isDisplayed,
        isFetched: fetchedStatus,
        trades: parsedData,
      };
      return updatedData;
    } else {
      //Simply flip our isDisplayed value otherwise.
      updatedData = {
        ...currData,
        isDisplayed: !currData.isDisplayed,
      };
      return updatedData;
    }
  });
};

export default congressTradingUpdater;

//bill Connection idea: currently not working.

//Query opensecrets for our company

//Find which organizations it pays for.
// let organizations = lobbyingDataFetch(search, setLobbyingData);
// console.log(organizations);
//Format taht returned data.

//UPdate lobbyingData.organizations to have a list of orgs it has paid off.

//Find which bills this company has lobbied for.

//For each bill you find, create an entry for it as a key, with an empty array.

//Loop through the array of bills for each key.

//Get a list of people who have voted on said bills.

//If any person on that list matches with anybody on our list of congress people who have traded our stock, tell us whether they voted yes or no on said bill.
