import React from 'react'

export default function Input({name, type, label}) {
  return (
    <div className='p-[5px] flex flex-col gap-[5px] outline-none justify-center pl-[50px] pr-[50px] '>
      <label htmlFor={name}>{label} </label>
      <input type={type} id= {name} className='border-b-2 py-2 px-4 outline-none border-black text-left' />
    </div>
  )
}

