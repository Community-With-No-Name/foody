import React from "react";
import { FOODLIST } from "@/utils/foodlist";
import { Montez } from "next/font/google";
const montez = Montez({subsets:['latin'], weight: '400'})
export default function Filter() {
  return (
    <div>
      <div className=" flex flex-col justify-center m-5">
        <div className={`${montez.className} flex justify-center h-14 w-56 font-bold text-5xl text-[#84BD00] capitalize`}>
          Filter recipe
        </div>
        {/* <div className=" flex justify-center h-14 w-56 font-bold text-xl text-[#84BD00]">
          Foods Available
        </div> */}
        {FOODLIST.map((pick, index) => (
          <div
            className="flex justify-center w-56 text-lg font-semibold text-gray-700 capitalize cursor-pointer"
            key={index}
          >
            {pick.name}
          </div>
        ))}
      </div>
    </div>
  );
}
