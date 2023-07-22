import "./App.css";
import React, { createContext, useState} from "react";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Display from "./pages/Display";

// import TickerMod from "./components/TickerMod";
export const chartTimeContext = createContext();

export default function App() {
  //timeInterval, stores which timeInterval to API call/render on chart.
  const [timeInterval, setTimeInterval] = useState({
    interval: "1D",
  });
  //Controls the color of the line on chart.
  const [symbolColor, setsymbolColor] = useState("#AFC787");
  //If an economic indicator is chosen, this controls the color of it displayed on the chart.
  const [indicatorColor, setindicatorColor] = useState("#AFC787");
  //Search is simply a string that stores the symbol.
  const [search, setSearch] = useState("");
  //Stores chartData to be rendered w/ chartJS.
  const [chartData, setChartData] = useState({
    // labels: timeInterval.data.map((data) => data.year),
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        tension: 0.4,
        // options: {
        //   scales: {
        //     x: {
        //       ticks: {
        //         maxTicksLimit: 5,
        //         callback: (value, index, values) => {
        //           if (
        //             index === 0 ||
        //             index === values.length - 1 ||
        //             index % Math.floor(values.length / 4) === 0
        //           ) {
        //             return value;
        //           } else {
        //             return "";
        //           }
        //         },
        //       },
        //     },
        //   },
        // },
      },
    ],
  });
  return (
    <div className="App flex flex-col min-h-screen items-center">
      <chartTimeContext.Provider
        value={{
          timeInterval,
          setTimeInterval,
          chartData,
          setChartData,
          search,
          setSearch,
          symbolColor,
          setsymbolColor,
          indicatorColor,
          setindicatorColor,
        }}
      >
        <Navbar />
        <Display />
        {/* <Footer /> */}
      </chartTimeContext.Provider>
    </div>
  );
}

//Moving context out from the Display into ouR aPP.

//eNS7URING that nothing breaks during that moving
//pOssible CORS issue with Search on our Navbar... UNFORTUNATE!
// ---> Try to resolve the cors issue
// ---> We absolutely want the search to be in the Navbar for UX reasons.

//
