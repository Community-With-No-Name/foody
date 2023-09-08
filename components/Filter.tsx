import React from "react";
import { FOODLIST } from "@/utils/foodlist";

export default function Filter() {
  return (
    <div>
      <div className=" flex flex-col justify-center m-5">
        <div className=" flex justify-center h-14 w-56 font-[Montserrat] font-bold text-2xl text-[#84BD00]">
          Filter
        </div>
        <div className=" flex justify-center h-14 w-56 font-bold text-xl text-[#84BD00]">
          Foods Available
        </div>
        {FOODLIST.map((pick, index) => (
          <div
            className="flex justify-center w-56 font-[Montserrat] text-lg font-semibold text-gray-700 capitalize  "
            key={index}
          >
            {pick.name}
          </div>
        ))}
      </div>
    </div>
  );
}
