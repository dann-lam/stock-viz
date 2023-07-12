import React, { useState } from "react";
import searchTicker from "../utils/searchTicker";
let Search = () => {
  //State value for user inputs for symbol.
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([]);

  let sortedDates = [];
  let sortedPrices = [];
  //capture/update our input value
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //Handle button click
  const searchClick = async (event) => {
    event.preventDefault();
    try {
      console.log("Search: ", search);
      const response = await searchTicker(search);

      const data = await response.json();
      //response returns a promise
      console.log(data["Time Series (Daily)"]);

      // response
      //   .then((jsonData) => jsonData.json())
      //   //returns another promise with json
      //   .then((data) => console.log(data));
      //Our dates come back in the object with unsorted dates.
      //So we sort the dates, put them into a new array, and grab the closing price for every date.
      //We then iterate through both arrays of sorted dates, and their closing price, and send the data to our react chart.

      //example query:
      //data["Time Series (5min)"]["2023-07-11 19:55:00"]["4. close"]
      //get the data out of our json'd promise.
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex relative items-center justify-center py-16 w-1/5">
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
