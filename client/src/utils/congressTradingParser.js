const congressTradingParser = (fetchedData) => {
  let parsedObj = {};
  //Loop through our fetchedData
  for (let i = 0; i < fetchedData.length; i++) {
    let currRep = fetchedData[i].representative;
    console.log(currRep);
    //See if the representative is on our Object.
    if (parsedObj[currRep]) {
      //If the rep is in our object, push that currentObject into the list of the array.
      //In the future I want the entries to be sorted by date.
      parsedObj[currRep].push(fetchedData[i]);
    } else {
      //If the representative is not in our object, add that rep in as a key, and the currentObject in side of an array.
      parsedObj[currRep] = [fetchedData[i]];
    }
  }
  //The end result is an object with a list of our purchases.
  return parsedObj;
};

export default congressTradingParser;
