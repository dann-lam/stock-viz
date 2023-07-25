export const indicatorParser = (data, timeInterval, lastDate) => {
  let resultArr = [];
  console.log("indicatorParser timeInterval: ", timeInterval);
  console.log("indicator Data found? Data: ", data);
  let dataKeys = Object.keys(data);
  console.log("indicator dataArray: ", dataKeys);
  //I go through the data Object
  let currDate = Infinity;
  for (let i = 0; currDate > lastDate; i++) {
    //I look at the date, if the date is larger than our lastdate,
    let keyDate = dataKeys[i];
    currDate = new Date(`${dataKeys[i]}`).getTime();
    let currPrice = Object.values(data[keyDate])[0];
    console.log("Current price is: ", currPrice);
    // then push the price into an array.
    resultArr.push(currPrice);
    console.log("currDate and lastDate are: ", currDate, lastDate);
    //return that array.
  }
  return resultArr;
};
