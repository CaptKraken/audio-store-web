import React from "react";
import { ColorOption } from "./ColorOption";
type ChipListFilterProps = {
  all: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};
export const ColorFilterList = ({
  all,
  selected,
  setSelected,
}: ChipListFilterProps) => {
  const onHandleToggleChoice = (
    e: React.ChangeEvent<HTMLInputElement>,
    choice: string
  ) => {
    const currentChecked: boolean = e.target.checked;

    // it returns the opposite for some reason
    if (!currentChecked) {
      setSelected((prev) => prev.filter((item) => item !== choice));
    } else {
      setSelected((prev) => [...prev, choice]);
    }
  };
  return (
    <div className={"flex flex-wrap gap-1 my-2"}>
      {all.map((color) => {
        const checked: boolean =
          selected.findIndex(
            (item) => item.toLowerCase() === color.toLowerCase()
          ) >= 0
            ? true
            : false;
        return (
          <ColorOption
            key={color}
            color={color}
            checked={checked}
            toggleCheck={onHandleToggleChoice}
          />
        );
      })}
    </div>
  );
};
