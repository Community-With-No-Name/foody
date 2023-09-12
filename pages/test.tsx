import { getRequest } from "@/api/apiCall";
import { getRecipeByCategory } from "@/api/apiURL";
import { queryKeys } from "@/api/queryKeys";
import { useQuery } from "@tanstack/react-query";
import Burger from "@/components/Burger";
import Dashboard from "@/components/Dashboard";
import Filter from "@/components/Filter";
import LowerDash from "@/components/LowerDash";
import React, { useState } from "react";

export default function test() {
  const [open, setOpen] = useState(false);

    const {data} = useQuery({
      queryKey: [queryKeys.getFoodsById],
      queryFn: async() => await getRequest(getRecipeByCategory("corn"))
    })
    React.useEffect(()=>{
      console.log(data)
    }, [data])
  // console.log(data, isLoading)
  return (
    <div>
      <div
        className={` flex justify-end items-end  ${
          open ? "hidden" : "flex"
        } cursor-pointer hover:text-black`}
        onClick={() => setOpen(true)}
      >
        Bugger Icon
      </div>
      <Burger open={open} setOpen={setOpen}></Burger>
    </div>
  );
}
