import timeConverter from "./timeConverter";

const closestIndex = (arr, num) => {
  let minIndex = 0;
  let minDistance = Math.abs(arr[0] - num);

  for (let i = 1; i < arr.length; i++) {
    const currDistance = Math.abs(arr[i] - num);
    if (currDistance < minDistance) {
      minIndex = i;
      minDistance = currDistance;
    }
  }
  return minIndex;
};

const newsParser = async (fetched, lastDate, chartData) => {
  let currentDate = Infinity;
  // let shortestDistance;
  // let distance;
  let currArr = [];
  //currentDate > lastDate
  for (let i = 0; currentDate > lastDate && i < fetched.length - 1; i++) {
    currentDate = timeConverter(fetched[i].time_published);

    let idx = closestIndex(chartData.labels, currentDate);
    let publishedDateObj = new Date(currentDate);

    currArr[idx] = {
      title: fetched[i].title,
      source: fetched[i].source,
      image: fetched[i].banner_image,
      link: fetched[i].url,
      time_published: publishedDateObj,
    };

    //Figure out where our time_published sits relative to the label array.
    //Shove an object containing the fetched[i]'s headling, link, and image into that slot that corresponds to the label array.
  }

  return currArr;
};

export default newsParser;
