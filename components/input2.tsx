import React from 'react'

export default function InputField({label, name, type, placeholder}) {
  return (
    <div>
        <div className=' flex flex-col my-6 w-full'>
      <label htmlFor={name} className=' pb-3'>{label} </label>
      <input type={type} id= {name} placeholder = {placeholder} className=' rounded-3xl px-4 outline-[#509e2f] outline text-left py-2' />
    </div>
        </div>
  )
}
