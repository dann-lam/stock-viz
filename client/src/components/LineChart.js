import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { chartTimeContext } from "../App";

function LineChart({ chartData }) {
  const { timeInterval, search } = useContext(chartTimeContext);
  // if (timeInterval)

  const displayFormMap = {
    "1D": "h:mm A",
    "5D": "MMM D",
    "1M": "MMM D",
    "6M": "MMM YYYY",
    Max: "YYYY",
  };
  // useEffect(() => {}, [displayForm, timeInterval]);
  return (
    //chart-container shadow-lg py-8 px-8 w-4/5 py-8 px-8 h-80
    <div className="chart-container shadow-lg py-8 px-8 h-80 rounded-lg">
      <Line
        data={chartData}
        options={{
          plugins: {
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
                  day: displayFormMap[timeInterval.interval],
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
