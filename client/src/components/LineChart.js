import React, { useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { chartTimeContext } from "../App";

function LineChart() {
  const { timeInterval, search, chartData, isNews } =
    useContext(chartTimeContext);

  const displayFormMap = {
    "1D": "h:mm A",
    "5D": "MMM D",
    "1M": "MMM D",
    "6M": "MMM YYYY",
    Max: "YYYY",
  };
  // useEffect(() => {
  //   console.log("Linechart timeinterval: ", timeInterval);
  // }, [timeInterval]);

  // useEffect(() => {}, [displayForm, timeInterval]);
  // const getOrCreateTooltip = (chart) => {
  //   let tooltipEl = chart.canvas.parentNode.querySelector("div");
  // };
  // const newsTooltipHandler = (context) => {
  //   const { chart, tooltip } = context;
  //   console.log(context);
  //   // const tooltipEl = getOrCreateTooltip(chart);
  // };

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
        className="h-full"
      />
    </div>
  );
}

export default LineChart;
