import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

//useCLickOutside is an imported function that handles toggling the colorpicker based on whether it has attention or not.
import useClickOutside from "../utils/useClickOutside";

export const PopoverPicker = ({ color, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover z-50" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
