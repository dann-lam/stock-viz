import timeConverter from "./timeConverter";
const newsParser = (fetched, lastDate) => {
  let currentDate = Infinity;
  //currentDate > lastDate
  for (let i = 0; currentDate > lastDate; i++) {
    currentDate = timeConverter(fetched[i].time_published);
    console.log("currentDate is: ", currentDate);
    console.log("lastDate is: ", lastDate);
    //Figure out where our time_published sits relative to the label array.
    //Shove an object containing the fetched[i]'s headling, link, and image into that slot that corresponds to the label array.
  }
  return fetched;
};

export default newsParser;
