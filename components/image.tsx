import React from 'react'
import image from '../public/image.jpg'
import Image from 'next/image'

export default function Images() {
  return (
    <div className=" md:w-[50%] items-center">
    <Image src={image} alt=""/>
  </div>
  )
}
