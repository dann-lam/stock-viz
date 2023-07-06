import React, { useState } from "react";

import CheckBox from "./CheckBox";
import Indicator from "./Indicator";

// import { ColorPicker } from "./ColorPicker";
import { PopoverPicker } from "./ColorPicker"

const TickerMod = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 w-3/5 py-2 ">
      <div class="h-8 flex items-center  justify-center font-thin">
        <CheckBox />
      </div>
      <div class="h- shadow-lg rounded-lg bg-gray-100 flex items-center  justify-center font-thin">
        <p>Hi</p>
      </div>
      <div class="">
        <PopoverPicker color={color} onChange={setColor} />
      </div>
      <div class="h-8 flex items-center  justify-center font-thin">
        <Indicator />
      </div>
      <div class="">
      </div>
    </div>
  );
};

export default TickerMod;
