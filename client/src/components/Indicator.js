import React from "react";

const Indicator = () => {
  return (
    <div>
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm font-thin shadow-lg"
      >
        <option value="" className="sm:text-sm font-thin">
          Please select
        </option>
        <option value="JM" className="sm:text-sm font-thin">
          John Mayer
        </option>
        <option value="SRV" className="sm:text-sm font-thin">
          Stevie Ray Vaughn
        </option>
        <option value="JH" className="sm:text-sm font-thin">
          Jimi Hendrix
        </option>
        <option value="BBK" className="sm:text-sm font-thin">
          B.B King
        </option>
        <option value="AK" className="sm:text-sm font-thin">
          Albert King
        </option>
        <option value="BG" className="sm:text-sm font-thin">
          Buddy Guy
        </option>
        <option value="EC" className="sm:text-sm font-thin">
          Eric Clapton
        </option>
      </select>
    </div>
  );
};

export default Indicator;
