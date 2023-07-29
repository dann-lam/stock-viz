import "./App.css";
import React, { createContext, useState } from "react";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Display from "./pages/Display";

// import TickerMod from "./components/TickerMod";
export const chartTimeContext = createContext();

export default function App() {
  //timeInterval, stores which timeInterval to API call/render on chart.
  const [timeInterval, setTimeInterval] = useState("1D");
  //
  const [isNews, setisNews] = useState(false);
  //Controls the color of the line on chart.
  const [econIndicator, setEconIndicator] = useState("Select");
  const [symbolColor, setsymbolColor] = useState("#AFC787");
  //If an economic indicator is chosen, this controls the color of it displayed on the chart.
  const [indicatorColor, setindicatorColor] = useState("#0000FF");
  //Search is simply a string that stores the symbol.
  const [search, setSearch] = useState("");
  //Stores chartData to be rendered w/ chartJS.
  const [chartData, setChartData] = useState({
    // labels: timeInterval.data.map((data) => data.year),
    labels: [],
    datasets: [],
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
          econIndicator,
          setEconIndicator,
          isNews,
          setisNews,
        }}
      >
        <Navbar />
        <Display />
        {/* <Footer /> */}
      </chartTimeContext.Provider>
    </div>
  );
}
