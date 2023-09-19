import React from "react";
import Registerfield from "@/components/registerfield";
import LoginField from "@/components/loginfield";
import { Tabs, Tab } from "@/components/tab";

export default function signup() {

  return (
    <div>
      <div className=" bg-white w-full p-12 overflow-hidden">
        <div className=' flex md:flex-row flex-col gap-10'>
          <div className="hidden md:block w-[50%]">
            <img src="/image.jpg" alt="" />
          </div>


          <div className="md:w-[50%] bg-white w-[400px] justify-center p-10">
            <h1 className=" text-center pb-6 font-bold ">Welcome to Foody</h1>

            {/* <div className=" form-box flex justify-center items-center relative">

              <div className="button-toggle-box bg-[#509e2f] rounded-3xl p-2 w-[250px] my-auto  text-white relative">
                <div className=" top-0 left-0 w-[125px] h-full bg-[#98e877] absolute rounded-3xl"></div>
                <button className=" login-button py-[5px] px-6 bg-none relative">Login</button>
                <button className=" register-button py-[5px] px-6 bg-none relative">Register</button>
              </div>

            </div> */}

{/* These are the input fields */}
            <Tabs>
              <Tab label="Login">
                <LoginField />
              </Tab>

              <Tab label="Register">
                <Registerfield />
              </Tab>
            </Tabs>
          </div>
        </div>

      </div>
    </div>
  );
}
