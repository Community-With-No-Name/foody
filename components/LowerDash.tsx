import React from "react";
import {IoMdArrowDropdown} from "react-icons/io"
import {BiSearch} from "react-icons/bi"
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"


export default function LowerDash() {
  return (
    <div>
      <div className=" flex h-24 w-full p-4 justify-between items-center border ">
        <img src="./CookPal.png" alt="cookpal" className=" h-20 w-36" />
        <div className=" flex justify-between items-center  h-10 w-3/5  border border-gray-700 rounded-full">
          <div className=" text-lg font-semibold h-10 w-48 pl-3 rounded-full flex gap-3 items-center bg-gray-500">
            All Categories
            <IoMdArrowDropdown  className="w-6 h-6"></IoMdArrowDropdown>
          </div>
          <div className=" flex gap-2 pr-3">
            Search
            <BiSearch className="w-6 h-6"></BiSearch>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-4">
          <AiOutlineShoppingCart className="w-7 h-7"></AiOutlineShoppingCart>
          
          <div className=" flex justify-center items-center h-10 w-10 border rounded-full ">
          <AiOutlineUser className="w-6 h-6"></AiOutlineUser>
          </div>
        </div>
      </div>
    </div>
  );
}
