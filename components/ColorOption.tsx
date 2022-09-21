import Image from "next/image";
import React from "react";
import checkIcon from "../public/icons/check-icon.png";

type ChipProps = {
  color: string;
  checked: boolean;
  toggleCheck: Function;
};

export const ColorOption = ({ color, checked, toggleCheck }: ChipProps) => {
  return (
    <div
      className={
        "focus-within:outline hover:outline-2 flex items-center justify-center"
      }
    >
      <input
        type={"checkbox"}
        name={color}
        id={color}
        checked={checked}
        className={"w-0 h-0"}
        onChange={(e) => toggleCheck(e, color)}
      />
      <label
        htmlFor={color}
        className={`block h-8 w-8 cursor-pointer hover:outline`}
        style={{ backgroundColor: `${color}` }}
      >
        {checked && <Image alt={"check"} src={checkIcon} />}
      </label>
    </div>
  );
};
