import { useEffect } from "react";
import congressTradingFetch from "../utils/congressTradingFetch";
import congressTradingParser from "./congressTradingParser";

const congressTradingUpdater = async (
  setCongressData,
  setLobbyingData,
  search,
  congressData
) => {
  //Swap it from whatever value it was to the opposite.
  await setCongressData((currData) => {
    const updatedData = {
      ...currData,
      isDisplayed: !currData.isDisplayed,
    };
    return updatedData;
  });

  //Get our data of congress members that have traded with our given stock.

  //Check to see if we have the data or not,
  await setCongressData((currData) => {
    // if we don't, go get our stuff.
    if (currData.isFetched === false) {
      let fetchedData = congressTradingFetch(search);
      //Format the data that was return from our search query.
      let parsedData = congressTradingParser(fetchedData);
      let fetchUpdate = {
        ...currData,
        //update congressData.isFetched to TRUE.
        isFetched: true,
        //Update congressData.trades to that formatted result.
        trades: parsedData,
      };
      return fetchUpdate;
      //
      // } else if (currData.isFetched && currData.isDisplayed === false) {
      //   //Do something when isDisplayed set to false, and fetched is true.
      // } else if (currData.isFetched && currData.isDisplayed === true) {
      //   //Do something when you've fetched it, and display is set back to true.
    }
    //if we do, you don't have to grab it again,

    //Query opensecrets for our company

    //Find which organizations it pays for.
    let organizations = lobbyingDataFetch(search)
    //Format taht returned data.

    //UPdate lobbyingData.organizations to have a list of orgs it has paid off.

    //Find which bills this company has lobbied for.

    //For each bill you find, create an entry for it as a key, with an empty array.

    //Loop through the array of bills for each key.

    //Get a list of people who have voted on said bills.

    //If any person on that list matches with anybody on our list of congress people who have traded our stock, tell us whether they voted yes or no on said bill.
  });

  // console.log("congressData is: ", congressData?.isFetched);
};

export default congressTradingUpdater;
