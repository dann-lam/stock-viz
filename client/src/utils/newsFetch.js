import newsParser from "./newsParser";

const newsFetch = async (symbol, chartData, setChartData) => {
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
      let currNewsArr = await newsParser(feed, lastDate, chartData);

      //
      console.log("chartData is: ", chartData);
      console.log("currNewsArr is: ", currNewsArr);
      // setChartData((currData) => ({
      //   ...currData,
      //   datasets: [
      //     { ...currData.datasets[0] },
      //     { ...currData.datasets[1] },
      //     {
      //       ...currData.datasets[2],
      //       label: `News Articles`,
      //       data: currNewsArr,
      //       pointRadius: 2,
      //       tension: 0.4,
      //     },
      //     ...currData.datasets.slice(3),
      //   ],
      // }));
    }

    return feed;
  } catch (err) {
    console.error(err);
  }
};

export default newsFetch;
