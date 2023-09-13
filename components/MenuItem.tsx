import React from "react"
// import image from "../public/Rectangle 4.png"
// import Image from "next/image";
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaComment  } from 'react-icons/fa6';
import { AiFillLike } from 'react-icons/ai'
import { IoStarSharp } from 'react-icons/io5'
import { Montez } from 'next/font/google'

const montez = Montez({subsets:['latin'], weight: '400'})

export default function MenuItem({
  name,
  price,
  comment,
  texture,
  time,
  like,
  rating, food
}) {
  return (
    <div className="menuItem flex flex-row m-3 ">
      <div>
        <div className=" relative">
          
        <img src = "/Rectangle 4.png" alt="food image" />
        
        <div className=" absolute top-40 font-bold text-3xl italic text-white">
        <h1 className = {montez.className}  >{food}</h1>
        </div>

        </div> 
        
        <div className=" flex justify-between pt-4 pb-14">
          <div className="left w-[60%]">
            <h1 className=" text-base font-semibold">{name}</h1>
            <h1 className="pt-[10px] text-xs flex items-center gap-2"><AiOutlineClockCircle/>{time}</h1>
            <div className=" flex text-xs pt-[15px]">
            <h1 className=" pr-[12px] flex items-center gap-2"><FaComment/>{comment}</h1>
            <h1 className="flex items-center gap-2"><AiFillLike/>{like}</h1>
            </div>
          </div>
          <div className="right text-right w-[30%]">
    
            <h1 className=" bg-[#84BD00] text-xs font-semibold py-[2px] text-right content-right">$ {price}</h1>
  
            <h1 className=" text-xs pt-[15px]">{texture}</h1>
            <h1 className=" text-xs pt-[15px] flex g"><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/></h1>
          </div>
        </div>
      </div>
      </div>
  );
  };