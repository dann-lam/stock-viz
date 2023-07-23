import React, { useContext } from "react";
import searchTicker from "../utils/searchTicker";
import { chartTimeContext } from "../App";
import searchIt from "../utils/searchIt";
import { fetchParser } from "../utils/fetchParser";

let Search = () => {
  //timeInterval is fed into our API request
  const { timeInterval, setChartData, search, setSearch } =
    useContext(chartTimeContext);

  //State value for user inputs for symbol.

  //Function to ingest our data and format it.

  //capture/update our input value
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //Handle button click
  const searchClick = async (event) => {
    event.preventDefault();
    console.log("Search: ", search);
    if (!search) {
      return console.log("No search found!");
    } else {
      searchIt(search, timeInterval, setChartData);
      // try {
      //   const response = await searchTicker(search, timeInterval);

      //   const data = await response.json();
      //   //response returns a promise
      //   //This is accessing our data's returned values based on the second key.

      //   let calledData = data[Object.keys(data)[1]];
      //   //Takes our data and turns it into something the chart can see.
      //   let chartData = fetchParser(calledData, timeInterval);
      //   // Update the react variable that controls the chart.
      //   console.log("chartData is");
      //   console.log(chartData);
      //   setChartData((prevData) => ({
      //     ...prevData,
      //     labels: chartData.labels,
      //     datasets: [
      //       {
      //         label: ``,
      //         data: chartData.data,
      //         backgroundColor: [
      //           "rgba(75,192,192,1)",
      //           "#ecf0f1",
      //           "#50AF95",
      //           "#f3ba2f",
      //           "#2a71d0",
      //         ],
      //         borderColor: "black",
      //         borderWidth: 2,
      //       },
      //     ],
      //   }));
      // } catch (err) {
      //   console.error(err);
      // }
    }
  };

  return (
    <div className="flex relative items-center justify-center w-4/5">
      <input
        type="text"
        placeholder="Enter Symbol"
        value={search}
        onChange={handleSearch}
        className="w-full border-gray-200 py-2.5 pe-10 shadow-lg sm:text-sm rounded-lg px-2.5"
      />

      <span className="absolute inset-y-0 end-0 grid w-1/5 place-content-center">
        <button
          onClick={searchClick}
          form="stockSearch"
          className="text-gray-600 hover:text-gray-700"
        >
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Search;
