import React from "react";
import { BiLogIn, BiSolidUserPlus } from "react-icons/bi"


export default function Dashboard() {
  return (
    <div>
      <div className=" bg-black h-10 mt-1 text-white flex justify-between items-center text-md font-semibold cursor-pointer shadow-lg">
        <ul className=" flex justify-between gap-4 mx-2">
          <li>COMMUNITY</li>
          <li>BOOKS</li>
          <li>RECIPE INDEX</li>
          <li>POPULAR</li>
        </ul>
        <ul className=" flex justify-between gap-4 mx-2">
          <li className=" flex gap-2">
            <BiSolidUserPlus className="w-6 h-6 bg-green-600"></BiSolidUserPlus>
            REGISTER
          </li>
          <li className=" flex gap-2">
            <BiLogIn   className="w-6 h-6 bg-green-600"></BiLogIn>
            LOGIN
          </li>
        </ul>
      </div>
    </div>
  );
}
