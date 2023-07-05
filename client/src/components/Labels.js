import React, { useState } from "react";

const Labels = () => {
  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 w-3/5 py-2">
      <div class="h-8 rounded-lg shadow-lg text-teal-600">
        <p className="text-sm">Symbol</p>
      </div>
      <div class="h-8 rounded-lg shadow-lg text-teal-600">
        <p className="text-sm">Display Info</p>
      </div>
      <div class="h-8 rounded-lg shadow-lg text-teal-600">
        <p className="text-sm">Symbol Color</p>
      </div>
      <div class="h-8 rounded-lg shadow-lg text-teal-600">
        <p className="text-sm">Indicator</p>
      </div>
      <div class="h-8 rounded-lg shadow-lg text-teal-600">
        <p className="text-sm">Indicator Color</p>
      </div>
    </div>
  );
};

export default Labels;
