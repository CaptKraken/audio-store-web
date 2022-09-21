import React from "react";

type ChipProps = {
  choice: string;
  checked: boolean;
  toggleCheck: Function;
};

export const Chip = ({ choice, checked, toggleCheck }: ChipProps) => {
  return (
    <div
      className={
        "mt-1 focus-within:outline focus-within:outline-2 focus-within:rounded-full"
      }
    >
      <input
        type={"checkbox"}
        name={choice}
        id={choice}
        checked={checked}
        className={"w-0 h-0"}
        onChange={(e) => toggleCheck(e, choice)}
      />
      <label
        htmlFor={choice}
        className={`py-1 px-3 rounded-full select-none cursor-pointer ${
          checked ? "bg-green-400" : "bg-gray-300"
        }`}
      >
        {choice}
      </label>
    </div>
  );
};
