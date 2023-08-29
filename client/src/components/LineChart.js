import React, { useRef } from "react";
import { Line, getElementsAtEvent } from "react-chartjs-2";

function LineChart({ timeScale, search, chartData, news }) {
  const chartRef = useRef();
  //displayFormMap controls how dates should be displayed based on our timeScale.
  const displayFormMap = {
    "1D": "h:mm A",
    "5D": "MMM D",
    "1M": "MMM D",
    "6M": "MMM YYYY",
    Max: "YYYY",
  };

  //label handlers will receive parts of text and format them to the tooltip on our chart.
  const beforeLabelHandler = (context) => {
    //Context is our dataset.
    //Whenhovering over context, we look at the dataIndex property, and use that position to get our newsStory info from the array at context.dataIndex's position.
    const currNewsStory = news.currNews[context.dataIndex];
    if (currNewsStory) {
      //regex to split up the long title to something more manageable for the tooltip. There is a better approach for this but this will do for now.
      return `${currNewsStory.title.replace(
        /(.{1,20})(?:\s|$)/g,
        "$1\n"
      )}\n Source: ${currNewsStory.source}`;
    } else {
      return;
    }
  };

  const labelHandler = (context) => {
    const label = context.dataset.label || "";
    if (label) {
      //parsed.y is the price.
      return `${label}: ${context.parsed.y}`;
    }
    return context.parsed.y;
  };

  const beforeFooterHandler = (context) => {
    const currNewsStory = news.currNews[context[0].dataIndex];
    if (currNewsStory) {
      //Display when the story was published. We .toLocaleString it to convert it from its timezone to a relevent one.
      return `Article published:\n${currNewsStory.time_published.toLocaleString()}`;
    }
  };

  //Upon click, checks to see if a hoverable dot has news that aligns with it, if it does, make it a clickable link to that news article.
  const clickHandler = (event) => {
    if (
      getElementsAtEvent(chartRef.current, event).length > 0 &&
      news.isDisplayNews &&
      news.currNews.length > 0
      //Check to see if we have anything.
    ) {
      //Get our stored link based on the index from getElementsAtEvent (chartJS function)
      const clickDatasetIndex = getElementsAtEvent(chartRef.current, event)[0]
        .index;
      // console.log("clickDatasetIndex: ", clickDatasetIndex);
      const clickNewsLink = news.currNews[clickDatasetIndex].link; //.link
      window.open(`${clickNewsLink}`, "_blank");
    }
  };

  return (
    //chart-container shadow-lg py-8 px-8 w-4/5 py-8 px-8 h-80
    <div className="chart-container shadow-lg py-8 px-8 h-80 rounded-lg">
      <Line
        data={chartData}
        options={{
          plugins: {
            tooltip: {
              enabled: true,
              caretSize: 10,
              cornerRadius: 4,
              padding: 12,
              callbacks: {
                label: labelHandler,
                beforeLabel: beforeLabelHandler,
                beforeFooter: beforeFooterHandler,
              },
            },

            title: {
              display: true,
              text: `${search}`,
            },
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              type: "timeseries",
              time: {
                unit: "day",
                displayFormats: {
                  day: displayFormMap[timeScale],
                },
              },
              ticks: {
                source: "labels",
              },
            },
          },
        }}
        onClick={clickHandler}
        ref={chartRef}
        className="h-full"
      />
    </div>
  );
}

export default LineChart;
