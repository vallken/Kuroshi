"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const HandleSearch = (event) => {
    if (event.keyCode === 13 || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyUp={HandleSearch}
      />
      <button className="absolute top-1.5 end-1" onClick={HandleSearch}>
        <MagnifyingGlass size={28} />
      </button>
    </div>
  );
};

export default InputSearch;
