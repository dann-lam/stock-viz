import React, { useContext } from "react";
// import { EditText, EditTextarea } from "react-edit-text";
// import "react-edit-text/dist/index.css";
import CheckBox from "./CheckBox";
import { chartTimeContext } from "../App";

import { PopoverPicker } from "./ColorPicker";
import Indicator from "./Indicator";
import Search from "./Search";
const TickerMod = () => {
  const {
    setChartData,
    setindicatorColor,
    setsymbolColor,
    symbolColor,
    indicatorColor,
  } = useContext(chartTimeContext);
  //MAYBE a useEffect hook, for updating chartData, after We've set the symbol/indicator color.
  //Update the symbolColor and chart data.
  const updateChartColor = (event) => {
    setsymbolColor(event);
    //Targets specifically the border color, copies over any left overs as well taht we may have missed.
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          borderColor: symbolColor,
        },
        ...prevData.datasets.slice(1),
      ],
    }));
  };
  const updateIndicatorColor = (event) => {
    setindicatorColor(event);
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        { ...prevData.datasets[0] },
        { ...prevData.datasets[1], borderColor: indicatorColor },
        ...prevData.datasets.slice(2),
      ],
    }));
  };
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 w-3/5 py-2 ">
      <div className="flex items-center  justify-center">
        {/* <EditText name="textbox" placeholder="Enter Ticker" /> */}
        <Search />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={symbolColor} onChange={updateChartColor} />
      </div>
      <div className="h-8 flex items-center  justify-center font-thin">
        <Indicator />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={indicatorColor} onChange={updateIndicatorColor} />
      </div>
      <div className="flex items-center  justify-center">
        <CheckBox />
      </div>
    </div>
  );
};

export default TickerMod;
