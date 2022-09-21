import Image from "next/image";
import React, { FormEvent, useRef } from "react";
import searchIcon from "../public/icons/search-icon.png";

export const HeaderSearchBar = () => {
  const searchTermRef = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const term = searchTermRef.current?.value;
    if (term) {
      console.log(term.trim());
    }
  };
  return (
    <form
      className={"w-full flex justify-center items-center"}
      onSubmit={(e: FormEvent) => handleOnSubmit(e)}
    >
      <input
        className={
          "w-full border-y-2 border-l-2  h-10 rounded-l outline-green-400 px-2"
        }
        ref={searchTermRef}
      />
      <button
        type={"submit"}
        className={
          "h-10 w-10 bg-green-400 py-1 px-1 rounded-r hover:bg-green-300 transition-all"
        }
      >
        <Image src={searchIcon} alt="search" className={"object-contain"} />
      </button>
    </form>
  );
};
