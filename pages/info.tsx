import React from 'react'
import {Montserrat} from 'next/font/google'
import Images from '@/components/image'

const montserrat = Montserrat ({subsets: ['latin']})
export default function login() {
  return (
    
    <div className = {montserrat.className} >
      <div className=" flex md:flex-row flex-col-reverse justify-center flex-wrap-reverse bg-black text-white overflow-hidden  w-full  ">
      
      <div className=" md:w-[50%] p-8">
        <h2 className=" text-[35px] font-[900] pb-[69px] pl-12">Save time by gaining a lot!</h2>

          <div>
  
            <div>
              <h1 className=' text-3xl font-[700] pb-[20px]'>FLEXIBLE AND EFFICIENT</h1>
              <p className=' text-base font-[500] pb-[30px] pl-12'>Have you ever thought whether dieting can be pleasurable and rewarding at the same time? <br />
              We do provide you a wide range of meals, thanks to which you will not only achieve your goal, but also your tummy will thank you for delicious flavors!</p>
            </div>


            <div>
              <h1 className=' text-3xl font-[700] pb-[20px]'>BENEFITS</h1>
              <p className=' text-base font-[500] pb-[30px] pl-12'>By subscribing, you get access to the panel
                in which your transformation begins!
                We create a diet tailored to your requirements,
                create a progress analysis and provide you with valuable advices.</p>
            </div>

            <div>
              <h1 className=' text-3xl font-[700] pb-[20px]'>INDIVIDUAL APPROACH</h1>
              <p className=' text-base font-[500] pb-[36px] pl-12'>We are aware of how complicated the human body is.
                We do not operate with schemes.
                Each client has a guarantee of quality and
                comprehensiveness of the service.</p>
            </div>
          </div>
          <div className="items-center text-center ">
          <button className=' bg-[#509e2f] text-sm font-bold py-7 px-9 rounded-md '>What are you waiting for? Contact Us</button>
          </div>
        </div>

        <Images/>

       
      </div>
    </div>
  )
}
