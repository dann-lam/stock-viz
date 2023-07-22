import React, { useContext } from "react";
// import { EditText, EditTextarea } from "react-edit-text";
// import "react-edit-text/dist/index.css";
// import CheckBox from "./CheckBox";
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

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 w-3/5 py-2 ">
      <div className="flex items-center  justify-center">
        {/* <EditText name="textbox" placeholder="Enter Ticker" /> */}
        <Search />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={symbolColor} onChange={setsymbolColor} />
      </div>
      <div className="h-8 flex items-center  justify-center font-thin">
        <Indicator />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={indicatorColor} onChange={setindicatorColor} />
      </div>
    </div>
  );
};

export default TickerMod;
