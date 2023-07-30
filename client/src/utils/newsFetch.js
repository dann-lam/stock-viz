import newsParser from "./newsParser";

const newsFetch = async (symbol, chartData) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=NP9GNGJNY8XMZIK9`
    );
    const data = await response.json();
    const feed = await data.feed;
    console.log("Feed complete!");
    console.log(feed);

    if (chartData.labels[chartData.labels.length - 1]) {
      let lastDate = chartData.labels[chartData.labels.length - 1];

      lastDate = lastDate.getTime();
      let currNewsArr = await newsParser(feed, lastDate);
      console.log("Chart labels: ", chartData.labels);
      console.log("currNewsArr: ", currNewsArr);
    }

    return feed;
  } catch (err) {
    console.error(err);
  }
};

export default newsFetch;
