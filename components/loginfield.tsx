import React from 'react'
import InputField from './input2';
import Checkbox from './checkbox';

export default function LoginField() {
    return (
        <div>
            
            <div className=" login left-[50px]" >

                <InputField label={"Username"} type="text" name="name" placeholder={"Enter your username"} />
                <InputField label={"Password"} type="password" name="name" placeholder={"Enter your password"} />

                <div className=" flex justify-between text-sm mb-5">
                    <Checkbox />

                    <button>Forgot Password?</button>
                </div>

                <div className=" items-center text-center">
                    <button className=" bg-[#509e2f] w-[232px] h-12 rounded-3xl text-white">Login</button>
                </div>
            </div>
        </div>
    )
}
