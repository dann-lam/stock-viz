import React, { useRef } from "react";
import { Line, getElementsAtEvent } from "react-chartjs-2";

function LineChart({ timeInterval, search, chartData, isNews }) {
  const chartRef = useRef();

  const displayFormMap = {
    "1D": "h:mm A",
    "5D": "MMM D",
    "1M": "MMM D",
    "6M": "MMM YYYY",
    Max: "YYYY",
  };

  //label handlers will receive parts of text and format them to the tooltip on our chart.
  const beforeLabelHandler = (context) => {
    const currNewsStory = isNews.currNews[context.dataIndex];
    if (currNewsStory) {
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
      return `${label}: ${context.parsed.y}`;
    }
    return context.parsed.y;
  };

  const beforeFooterHandler = (context) => {
    const currNewsStory = isNews.currNews[context[0].dataIndex];
    if (currNewsStory) {
      return `Article published:\n${currNewsStory.time_published.toLocaleString()}`;
    }
  };

  //Upon click, checks to see if a hoverable dot has news that aligns with it, if it does, make it a clickable link to that news article.
  const clickHandler = (event) => {
    if (
      getElementsAtEvent(chartRef.current, event).length > 0 &&
      isNews.isDisplayNews &&
      isNews.currNews.length > 0
    ) {
      const clickDatasetIndex = getElementsAtEvent(chartRef.current, event)[0]
        .index;
      const clickNewsLink = isNews.currNews[clickDatasetIndex].link; //.link
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
                  day: displayFormMap[timeInterval],
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
