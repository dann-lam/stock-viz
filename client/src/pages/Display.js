import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../components/LineChart";
import TickerMenu from "../components/TickerMenu";
import Labels from "../components/Labels";
import TimeIntervalButtons from "../components/TimeIntervalButtons";
import Price from "../components/Price";
import Search from "../components/Search";
import CongressTrades from "../components/CongressTrades";

Chart.register(CategoryScale);

const Display = () => {
  //timeScale, determined by userclick, used for API calls.
  const [timeScale, setTimeScale] = useState("1D");
  //Stores news information and button status for rendering on chart.
  const [news, setNews] = useState({
    isDisplayNews: false,
    newsData: [],
    currNews: [],
  });
  //econMode determines what econ indicator to search for.
  const [econMode, setEconMode] = useState("Select");
  //Changes color of ticker line on chart.
  const [symbolColor, setsymbolColor] = useState("#AFC787");
  //changes color of econ indicator.
  const [indicatorColor, setindicatorColor] = useState("#0000FF");
  //Search stores ticker symbol.
  const [search, setSearch] = useState("");
  //Stores chartData to be rendered w/ chartJS.
  const [chartData, setChartData] = useState({
    // labels: timeScale.data.map((data) => data.year),
    labels: [],
    datasets: [],
  });
  //congressData.trades tracks which stocks congress members are buying.
  //congressData.isFetched tracks whether to render data or is fetched.
  const [congressData, setCongressData] = useState({
    isDisplayed: false,
    isFetched: false,
    trades: {},
  });

  /*
  bills:
    {
     S.1235: [{Anderson Hellman: Yes},{Yulia Yasser: No}],
     HR.12345: [{Hillary Clinton: No}, {Obama Barrack: Yes}]
    },
  */

  //lobbyingData.organizations tracks information on organizations the target company is paying,
  //lobbyingData.bills tracks Bills it is lobbying for.
  //This react state is currently not being used or updated!!

  // const [lobbyingData, setLobbyingData] = useState({
  //   organizations: [],
  //   bills: [{}],
  // });

  return (
    <div className="flex flex-col py-16 h-max w-4/5 items-center">
      <h2 style={{ textAlign: "center" }}> </h2>
      {/* If there is no chartData, render a simple timeScale selector with a search option. Once user does a search, show them the rest of the options. */}
      {chartData?.datasets[0]?.data[0] ? (
        <>
          <Price chartData={chartData} />
          <LineChart
            chartData={chartData}
            timeScale={timeScale}
            search={search}
            news={news}
          />
          <TimeIntervalButtons
            setTimeScale={setTimeScale}
            search={search}
            setChartData={setChartData}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econMode={econMode}
            news={news}
          />

          <Labels />
          <hr className="divide-slate-400/10 w-3/5 m-4" />
          <TickerMenu
            setChartData={setChartData}
            setindicatorColor={setindicatorColor}
            setsymbolColor={setsymbolColor}
            symbolColor={symbolColor}
            indicatorColor={indicatorColor}
            news={news}
            setNews={setNews}
            search={search}
            chartData={chartData}
            timeScale={timeScale}
            setSearch={setSearch}
            econMode={econMode}
            setEconMode={setEconMode}
            setCongressData={setCongressData}
            congressData={congressData}
          />
          {/* If congressData.isDisplayed is set to on, than display our information on congress lobbying. */}
          {congressData.isDisplayed && (
            <CongressTrades congressData={congressData} />
          )}
        </>
      ) : (
        <div className="divide-slate-400/10 w-2/5 m-4">
          <Search
            timeScale={timeScale}
            setChartData={setChartData}
            search={search}
            setSearch={setSearch}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econMode={econMode}
            news={news}
          />
          <TimeIntervalButtons
            setTimeScale={setTimeScale}
            search={search}
            setChartData={setChartData}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econMode={econMode}
            news={news}
          />
        </div>
      )}
    </div>
  );
};

export default Display;
