import React from 'react'
import Checkbox from './checkbox'
import InputField from './input2'

export default function Registerfield() {
    return (
        <div>
            <div className=" login left-[450px] " >

                <InputField label={"Email"} type="text" name="name" placeholder={"Enter your username"} />
                <InputField label={"Username"} type="password" name="name" placeholder={"Enter your password"} />
                <InputField label={"Password"} type="password" name="name" placeholder={"Enter your password"} />
                <div className=" flex justify-between text-sm mb-5">
                    <Checkbox />

                    <button>Forgot Password?</button>
                </div>

                <div className=" items-center text-center">
                    <button className=" bg-[#509e2f] w-[232px] h-12 rounded-3xl text-white">Register</button>
                </div>
            </div>
        </div>
    )
}
