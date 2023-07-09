import React, { useState } from "react";

const Labels = () => {
  return (
    <div class="grid grid-cols-1  lg:grid-cols-6 lg:gap-8 w-3/5 py-2">
      <div class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Display Info</p>
      </div>
      <div class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Symbol</p>
      </div>
      <div class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Symbol Color</p>
      </div>
      <div class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Indicator</p>
      </div>
      <div class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Indicator Color</p>
      </div>
      <div class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Remove</p>
      </div>
    </div>
  );
};

export default Labels;
