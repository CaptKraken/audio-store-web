import React from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";

type PriceRangeProps = {
  state: {
    min: number;
    max: number;
  };
  initState: {
    min: number;
    max: number;
  };
  setState: Function;
};

export const PriceRange = ({ initState, state, setState }: PriceRangeProps) => {
  return (
    <>
      <div className={"w-full flex justify-between"}>
        <p className={"font-semibold text-gray-500"}>USD {state.min}</p>
        <p className={"font-semibold text-gray-500"}>USD {state.max}</p>
      </div>
      <div className={"w-full"}>
        <MultiRangeSlider
          min={initState.min}
          max={initState.max}
          onChange={({ min, max }: { min: number; max: number }) =>
            setState({ min, max })
          }
        />
      </div>
    </>
  );
};
