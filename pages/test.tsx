import Burger from "@/components/Burger";
import Filter from "@/components/Filter";
import React, { useState } from "react";

export default function test() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={`${open ? "hidden" : "block"}`}>
        <div
          className={` flex justify-end items-end   cursor-pointer hover:text-black`}
          onClick={() => setOpen(true)}
        >
          Bugger Icon
        </div>
        <Filter></Filter>
      </div>
      <Burger open={open} setOpen={setOpen}></Burger>
    </div>
  );
}
