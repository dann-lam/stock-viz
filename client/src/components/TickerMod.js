import React, { useState } from "react";

import CheckBox from "./CheckBox";

const TickerMod = () => {
  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 w-3/5 py-8">
      <div class="h-16 rounded-lg bg-gray-100">
        <p>Hi</p>
      </div>
      <div class="h-16 rounded-lg bg-gray-100">
      <CheckBox />
      </div>
      <div class="h-16 rounded-lg bg-gray-100">
        <p>Hi</p>
      </div>
      <div class="h-16 rounded-lg bg-gray-100">
        <p>Hi</p>
      </div>
      <div class="h-16 rounded-lg bg-gray-100">
        <p>Hi</p>
      </div>
    </div>
  );
};

export default TickerMod;
