import React, { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import CheckBox from "./CheckBox";

// import { ColorPicker } from "./ColorPicker";
import { PopoverPicker } from "./ColorPicker";
import Indicator from "./Indicator";
const TickerMod = () => {
  const [symbolColor, setsymbolColor] = useState("#AFC787");
  const [indicatorColor, setindicatorColor] = useState("#aabbcc");
  const [symbol, setSymbol] = useState("AAPL");
  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8 w-3/5 py-2 ">
      <div class="h-8 flex items-center  justify-center font-thin">
        <CheckBox />
      </div>
      <div class="h-8 shadow-lg rounded-lg bg-gray-100 flex items-center  justify-center font-thin">
        <EditText name="textbox" placeholder="Enter Ticker" />
      </div>
      <div class="flex items-center  justify-center">
        <PopoverPicker color={symbolColor} onChange={setsymbolColor} />
      </div>
      <div class="h-8 flex items-center  justify-center font-thin">
        <Indicator />
      </div>
      <div class="flex items-center  justify-center">
        <PopoverPicker color={indicatorColor} onChange={setindicatorColor} />
      </div>
      <div class="flex items-center  justify-center">
        <p>❌</p>
      </div>
    </div>
  );
};

export default TickerMod;
