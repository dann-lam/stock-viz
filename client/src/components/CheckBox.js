import React from "react";
//Does whatever is fed into our parameters. Very generic.
const CheckBox = ({ checked, onChange, boxName }) => {
  // const checkBoxInputRef = useRef();

  return (
    <label htmlFor={boxName} className="relative h-8 w-14 cursor-pointer">
      <input
        // ref={checkBoxInputRef}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id={boxName}
        className="peer sr-only"
      />

      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>

      <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
};

export default CheckBox;
