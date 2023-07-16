import React, { useState, useContext } from "react";
import searchTicker from "../utils/searchTicker";
import { chartTimeContext } from "../pages/Display";

import { fetchParser } from "../utils/fetchParser";



let Search = () => {
  //timeInterval is fed into our API request
  const { timeInterval, setTimeInterval } = useContext(chartTimeContext);
  //State value for user inputs for symbol.
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([]);

  //Function to ingest our data and format it.

  //capture/update our input value
  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(timeInterval);
  };

  //Handle button click
  const searchClick = async (event) => {
    event.preventDefault();
    try {
      console.log("Search: ", search);
      const response = await searchTicker(search, timeInterval);

      const data = await response.json();
      //response returns a promise
      //This is accessing our data's returned values based on the second key.

      let calledData = data[Object.keys(data)[1]];
      //Takes our data and turns it into something the chart can see.
      let chartData = fetchParser(calledData);
      // Update the react variable that controls the chart.
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex relative items-center justify-center py-8 w-1/5">
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
