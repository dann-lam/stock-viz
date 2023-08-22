import React from "react";

import searchIt from "../utils/searchIt";

let Search = ({
  timeScale,
  setChartData,
  search,
  setSearch,
  symbolColor,
  chartData,
  indicatorColor,
  econMode,
  news,
}) => {
  //timeScale is fed into our API request

  //State value for user inputs for symbol.

  //Function to ingest our data and format it.

  //capture/update our input value
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //Handle button click
  const searchClick = async (event) => {
    event.preventDefault();
    // console.log("Search: ", search);
    if (!search) {
      return console.log("No search found!");
    } else {
      await searchIt(
        search,
        timeScale,
        setChartData,
        symbolColor,
        indicatorColor,
        econMode,
        news
      );
      //IF we have another option selected other than the default, then also grab our economic indicator upon search.
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
