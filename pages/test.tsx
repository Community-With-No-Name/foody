import Burger from "@/components/Burger";
import Dashboard from "@/components/Dashboard";
import Filter from "@/components/Filter";
import LowerDash from "@/components/LowerDash";
import React, { useState } from "react";

export default function test() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Burger open={open} setOpen={setOpen}></Burger>
      <div
        className={`  ${
          open ? "hidden" : "block"
        } `}
      >
        <Dashboard></Dashboard>
        <LowerDash></LowerDash>
        <div className="flex justify-end items-end cursor-pointer hover:text-black " onClick={() => setOpen(true)}>Bugger Icon</div>

        <Filter></Filter>
      </div>
    </div>
  );
}
