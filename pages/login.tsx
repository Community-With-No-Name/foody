import React from "react";
import Input from "@/components/Input";
import Image from "../public/background.png";

export default function login() {
  return (
    <div className="w-full h-full p-0  m-0 bg-black items-center">
      <div className="lg:flex lg:justify-center lg:h-[619px] lg:overflow-hidden lg:pt-[40px] md:flex-row-reverse md:justify-center md:items-center flex-wrap-reverse md:pl-[50px] md:w-full md:overflow-auto">
        <div className="">
          <img
            src="background.png"
            alt="background"
            className="lg:h-[550px] lg:w-[500px] sm:hidden lg:block "
          />
          <img
            src="small.png"
            alt="mobile screen"
            className="sm:w-full h-[390px] lg:hidden "
          />
        </div>
        <div className="lg:h-[550px] lg:w-[500px] bg-white md:w-[375px] ">
          <div className="flex justify-center flex-col gap-[7px] items-center pt-5">
            <div className="pl-[30px] items-center text-center font-[500px] text-lg lg:block sm:hidden">
              Are you ready to change your <br />
              life?
            </div>
            <div className="pl-[30px] items-center leading-10 font-bold">
              Fill in the form!
            </div>
          </div>

          <Input label={"Fullname"} type="text" name="name" />
          <Input label={"Password"} type="password" name="name" />
          <Input label={"Email"} type="email" name="name" />

          <div className="flex justify-center pb-[10px] sm:pt-[10px] sm:pb-[10px]">
            <div className="">Already have an account?</div>
            <div className="text-[#84BD00] cursor-pointer font-bold">Login</div>
          </div>
          <div className=" border text-center lg:ml-[55px] sm:ml-[150px] w-[400px] bg-[#509E2F] text-white rounded-xl h-[40px] font-bold cursor-pointer ">
            Sign up
          </div>
          <div className="pl-[100px]  pb-5 items-center">
            <div className="text-center text-[#84BD00] font-semibold pt-[20px] pr-[30px]">
              By continuing, you agree to accept our
            </div>
            <div className="text-center text-[#509E2F] font-semibold pr-[30px]">
              Privacy Policy & Terms of Service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
