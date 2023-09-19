import React from 'react'

export default function Checkbox() {
    return (
        <div>          
            <div className="flex items-center my-4">
            <input type="checkbox" id="myCheckbox" className="h-4 w-5  border-gray-300 rounded " />
            <label htmlFor="myCheckbox" className="ml-2 text-gray-700">Remember Me</label>
        </div>
        </div>
    )
}
