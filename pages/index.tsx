
import Burger from "@/components/Burger";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"


export default function home() {
  const [open, setOpen] = useState(false);
  return (
    <div>

    <div
      style={{ backgroundImage: "url(/image.png)" }}
      className={`bg-center bg-cover bg-no-repeat ${
        open ? "hidden" : "block"
      } `}
    >
      <div className=" h-screen">
        <div className=" flex justify-between items-start p-10 ">
          <div className="">
            <img src="/image2.png" alt="" />
          </div>
          <div
            className="flex justify-end items-end cursor-pointer text-black md:hidden"
            onClick={() => setOpen(true)}
          >
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
        
          <div className=" hidden md:flex gap-10  text-white text-3xl font-bold ">
            <div className="border-b">home</div>
            <div>panel</div>
            <div>info</div>
            <div> contact</div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="pl-5 flex flex-col items-center md:items-start">
            <div className="w-[250px] md:w-[480px] border-2 border-white "></div>
            <div className="font-bold text-white text-6xl md:text-9xl   ">
              RECIPE APP
            </div>
            <div className="w-[250px] md:w-[480px] border-2 border-white  "></div>
          </div>

          <div className=" pl-28 text-2xl  text-white md:text-4xl pt-8  ">
            Gain more thanks to smart diet plan. <br />
            Do not wait! Contact us now.
          </div>

          <div className="items-center flex justify-center mt-8">
            <div className="absolute bg-stone-200 bg-opacity-20 rounded shadow px-10 py-3 hover:bg-black">
              <div className="text-white font-bold text-3xl  ">sign up!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Burger open={open} setOpen={setOpen}></Burger>
    </div>
  );
}
