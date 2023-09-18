import React from "react";
import { useRouter } from "next/router";
import { getRecipeById } from "@/api/apiURL";
import { getRequest } from "@/api/apiCall";
import { queryKeys } from "@/api/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function id() {
  const router = useRouter();
  console.log(router.query.id);

  const { data: foodData, isFetched } = useQuery({
    queryKey: [queryKeys.getFoodsById, router.query.id],
    queryFn: async () => await getRequest(getRecipeById(router.query.id)),
  });

    console.log(foodData)

  return (

      <div>{router.query.id}</div>
  )
}
