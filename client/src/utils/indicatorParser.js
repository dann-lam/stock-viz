export const indicatorParser = async (data, timeInterval, lastDate) => {
  let resultArr = [];

  let dataKeys = Object.keys(data);

  //I go through the data Object
  let currDate = Infinity;
  for (let i = 0; currDate > lastDate; i++) {
    //I look at the date, if the date is larger than our lastdate,
    let keyDate = dataKeys[i];
    currDate = new Date(`${dataKeys[i]}`).getTime();
    let currPrice = Object.values(data[keyDate])[0];
    // then push the price into an array.
    resultArr.push(currPrice);

    //return that array.
  }
  return resultArr;
};
