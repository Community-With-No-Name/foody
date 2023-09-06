import Burger from '@/components/Burger'
import React, { useState } from 'react'

export default function test() {
    const [open, setOpen]= useState(false)
  return (
    <div>
        <div className={` flex justify-end items-end  ${open ? 'hidden':'flex'} cursor-pointer hover:text-black`} onClick={()=>setOpen(true)}>Bugger Icon</div>
        <Burger open={open} setOpen={setOpen} ></Burger>

    </div>
  )
}
