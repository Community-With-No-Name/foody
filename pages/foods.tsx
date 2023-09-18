import react from "react";
import Dashboard from "@/components/Dashboard";
import Filter from "@/components/Filter";
import { Montez } from "next/font/google";
const montez = Montez({subsets:['latin'], weight: '400'})
export default function food() {
  return (
    <div>
        <Dashboard />
        <div className="grid grid-cols-4" >
            <div><Filter /></div>
            <div className="col-span-2 mt-10">
                <div>
                <div className="border w-[725.003px]"></div>
                <div className="flex justify-between p-3 font-semibold text-lime-500">
                    <div>Home</div>
                    <div>Explore</div>
                    <div>Help</div>
                    <div>Profile</div>
                </div>
                <div className="border w-[725.003px]"></div>

                </div>
                  <div className=  {`${montez.className} text-lime-500 text-6xl pt-8 `}>
                    cusines        
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-5 ">
                
                  </div>

            </div>
            <div>
              <img src="/image 2.png" alt="" />
            </div>

        </div>
        

        


    </div>
  )
}

