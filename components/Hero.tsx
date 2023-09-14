import React from "react";
import Image from "../public/pinterest.png";

export default function Hero() {
  return (
    <div>
      <div className="bg-[url(../public/heroimage.png)] h-[100vh] w-full bg-no-repeat bg-cover">
        <div className="flex justify-between">
          <div className="pt-[150px] pl-[127px] text-white ">
            <div className=" pt-[118px] pb-[44px]  items-center  flex gap-4  ">
              <h1 className="text-[60px] font-normal leading-[73.14px]">
                Meat
              </h1>
              <h1 className="text-[60px]  font-bold leading-[73.14px]">
                Chicken
              </h1>
            </div>
            <div className=" border w-[278px] h-[79px] text-center font-normal text-[40px] cursor-pointer hover:bg-white hover:text-red-600">
              More
            </div>
          </div>
          <div className=" pb-[45px] pt-[70px]">
            <img
              src="facebook.png"
              alt="facebook"
              className="h-[89px]  w-[63px]"
            />
            <img
              src="youtube.png"
              alt="youtube"
              className="h-[88px]  w-[65px]"
            />
            <img
              src="twitter.png"
              alt="twitter"
              className="h-[82px]  w-[65px]"
            />
            <img
              src="pinterest.png"
              alt="facebook logo"
              className="h-[89px]  w-[65px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
