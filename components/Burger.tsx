import React from "react";

export default function Burger({ open, setOpen }) {
  return (
    <div
      className={` h-screen w-full bg-black  text-gray-400 ${
        open ? "flex" : "hidden"
      } flex-col  `}
    >
      <div
        className=" flex w-full justify-end items-end cursor-pointer hover:text-white"
        onClick={() => setOpen(false)}
      >
        Exit
      </div>
      <div className=" h-screen w-screen flex flex-col justify-center items-center my-10 ">
        <ul className=" text-3xl font-bold ">
          <li className=" cursor-pointer hover:text-white">Home</li>
          <li className=" cursor-pointer hover:text-white">Panel</li>
          <li className=" cursor-pointer hover:text-white">Info</li>
          <li className=" cursor-pointer hover:text-white">Contact</li>
        </ul>
      </div>
      <div className=" h-screen flex justify-center items-end text-3xl font-bold m-5 mt-16">
        <div className=" p-5 cursor-pointer hover:text-white">Facebook</div>
        <div className="p-5 cursor-pointer hover:text-white">Youtube</div>
      </div>
    </div>
  );
}
